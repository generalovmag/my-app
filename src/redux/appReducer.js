import {authSetUserDataThunk} from "./authReducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
    initialization: false
}

const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }
}

export const initializationSuccess = () => ({type: SET_INITIALIZATION})

export const initializationApp = () => (dispatch) => {
    let promise = dispatch(authSetUserDataThunk())
    Promise.all([promise]).then(() => {
    dispatch(initializationSuccess())
    })
}


export default initializationReducer