import { combineReducers } from "redux";
import { TypeOf } from "yup";
import userReducer from "./userReduce";
const rootReducer=combineReducers({
    userReducer
})
export type storeType=ReturnType<typeof rootReducer>;
export default rootReducer;