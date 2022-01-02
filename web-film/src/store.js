/* eslint-disable react-hooks/rules-of-hooks */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./redux/reducers/reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
