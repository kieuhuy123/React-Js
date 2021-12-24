import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import watchlistReducer from "./redux/reducers/reducers";

const store = createStore(watchlistReducer, composeWithDevTools());

export default store;
