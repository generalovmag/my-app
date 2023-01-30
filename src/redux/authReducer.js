import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT_USER = 'LOGOUT_USER'


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
                ...action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuthUser: false
            }
        default:
            return state
    }
}

export const authSetUserData = ({userId, email, login, isAuthUser}) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuthUser}
})
export const authSetUserLogout = () => ({type: LOGOUT_USER})

export const authSetUserDataThunk = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            let isAuthUser = true
            dispatch(authSetUserData({id, email, login, isAuthUser}))
        }
    })
}
export const authSetLoginUserThunk = ({email, password, rememberMe, captcha}) => (dispatch) => {
    authAPI.login({email, password, rememberMe, captcha}).then(data => {
        if (data.resultCode === 0) {
            let id = data.id
            authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    let isAuthUser = true
                    dispatch(authSetUserData({id, email, login, isAuthUser}))
                }
            })
        }
    })
}

export const logoutUserThunk = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(authSetUserLogout())
        }
    })
}

export default authUserReducer