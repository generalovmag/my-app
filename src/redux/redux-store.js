import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let redusers = combineReducers({
  profilePageReducer,
  dialogsPageReducer,
  sidebarReducer,
  usersReducer,
  authReducer
})

let store = createStore(redusers)

window.store = store

export default store