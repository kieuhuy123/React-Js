import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./redux/reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
