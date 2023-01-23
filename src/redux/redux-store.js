import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "redux-form";
import initializationReducer from "./appReducer";

let redusers = combineReducers({
  profilePageReducer,
  dialogsPageReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  form: reducer,
  initializationReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

window.store = store

export default store