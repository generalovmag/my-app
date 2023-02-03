import {authAPI} from "../api/api";

const SET_USER_DATA = 'authReducer/SET_USER_DATA',
        LOGOUT_USER = 'authReducer/LOGOUT_USER'


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

export const authSetUserDataThunk = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        let isAuthUser = true
        dispatch(authSetUserData({id, email, login, isAuthUser}))
    }

}
export const authSetLoginUserThunk = ({email, password, rememberMe, captcha}) => async (dispatch) => {
    let response = await authAPI.login({email, password, rememberMe, captcha})
    if (response.resultCode === 0) {
        let responseDown = await authAPI.me()
        if (responseDown.resultCode === 0) {
            let {id, email, login} = responseDown.data
            let isAuthUser = true
            dispatch(authSetUserData({id, email, login, isAuthUser}))
        }
    }
}

export const logoutUserThunk = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(authSetUserLogout())
    }

}

export default authUserReducer