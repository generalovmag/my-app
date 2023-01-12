import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthUser: false
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthUser: true
            }
        default:
            return state
    }
}

export const authSetUserData = ({userId, email, login}) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const authSetUserDataThunk = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(authSetUserData({id, email, login}))
        }
    })
}


export default authUserReducer