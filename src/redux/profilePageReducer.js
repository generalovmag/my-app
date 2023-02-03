import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        {id: 1, text: 'It\'s my first post!', likeCount: 12},
        {id: 2, text: 'Hello, how are you?', likeCount: 1},
        {id: 3, text: 'I\'m fine!', likeCount: 22},
        {id: 4, text: 'It\'s my second post!', likeCount: 4}
    ],
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    text: action.newPostText,
                    likeCount: 0
                }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }

}


export const addPostActionCreator = (newPostText) => ({type: ADD_NEW_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfileThunk = (userID) => async (dispatch) => {
    let userId = userID
    if (!userId) {
        userId = 27388
    }
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response))

}
export const getUserStatusThunk = (userID) => async (dispatch) => {
    let userId = userID
    if (!userId) {
        userId = 27388
    }
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))

}
export const updateUserStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }

}

export default profilePageReducer