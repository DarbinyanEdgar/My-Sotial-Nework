import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import avatarReducer from "./avatarReducer";
import friendReducer from "./friendReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers(
    {
        messagePage: messageReducer,
        postPage: postReducer,
        avatarPage: avatarReducer,
        friendPage: friendReducer,
        usersPage: userReducer,
        auth: authReducer
    }
)


let store = createStore(reducers,applyMiddleware(thunkMiddleWare));
window.store = store
export default store