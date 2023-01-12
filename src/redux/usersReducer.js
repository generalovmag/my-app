import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_USERS_COUNT = 'SET_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }

}


export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (users) => ({type: SET_USERS_COUNT, totalCount: users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsersThunk = (numberPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(numberPage))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(numberPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}
export const userFollowThunk = (id) => (dispatch) => {
    usersAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(id))
        }
    })
}
export const userUnfollowThunk = (id) => (dispatch) => {
    usersAPI.unfollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(id))
        }
    })
}


export default usersReducer