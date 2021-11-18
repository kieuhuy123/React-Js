import colorReducer from "./colorSlice";
import todoReducer from "./todoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  color: colorReducer,
  todo: todoReducer,
});

export default rootReducer;
