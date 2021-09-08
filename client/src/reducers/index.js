import { combineReducers } from "redux";
import BookReducer from "./booksReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
    Books: BookReducer,
    Users: UserReducer,
});

export default rootReducer;
