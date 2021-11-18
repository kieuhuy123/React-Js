import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { todoReducer } from "./reducers/reducer";
import logger from "./enhencers/logger";
import thunkFake from "./middlewares/thunk-fake";
// import thunkReal from "redux-thunk";

const reduxDevtools = () =>
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    todoReducer,
    compose(applyMiddleware(thunkFake), logger, reduxDevtools())
    // compose(applyMiddleware(thunkReal), logger, reduxDevtools())
);
