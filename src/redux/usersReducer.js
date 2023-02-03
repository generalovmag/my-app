import {usersAPI} from "../api/api";
import {updateObjectinArray} from "../assets/objectHelpers";

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
                users: updateObjectinArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userID, 'id', {followed: false})
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

export const getUsersThunk = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowToggle = async (dispatch, userID, apiMethod, actionCrater) => {
    let response = await apiMethod(userID)
    if (response.resultCode === 0) {
        dispatch(actionCrater(userID))
    }
}

export const userFollowThunk = (userID) => async (dispatch) => {
    followUnfollowToggle(dispatch, userID, usersAPI.follow.bind(usersAPI), follow)
}
export const userUnfollowThunk = (userID) => async (dispatch) => {
    followUnfollowToggle(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollow)
}


export default usersReducer