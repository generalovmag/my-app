import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST',
    UPDATE_TEXT_NEW_POST = 'UPDATE-TEXT-NEW-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, text: 'It\'s my first post!', likeCount: 12},
        {id: 2, text: 'Hello, how are you?', likeCount: 1},
        {id: 3, text: 'I\'m fine!', likeCount: 22},
        {id: 4, text: 'It\'s my second post!', likeCount: 4}
    ],
    newPostText: '',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    text: state.newPostText,
                    likeCount: 0
                }],
                newPostText: ''
            }
        case UPDATE_TEXT_NEW_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}


export const addPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateTextNewPostActionCreator = (newText) => ({type: UPDATE_TEXT_NEW_POST, text: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfileThunk = (userID) => {
    return (dispatch) => {
        let userId = userID
        if (!userId) {
            userId = 27388
        }
        profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profilePageReducer