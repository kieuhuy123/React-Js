import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counterSlice";

const store = createStore(counterReducer, composeWithDevTools());

export default store;
