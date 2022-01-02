import { combineReducers } from "redux";
import watchlistRedcer from "./watchlistSlice";
import filmReducer from "./filmSlice";

const reducer = combineReducers({
  film: filmReducer,
  watchlist: watchlistRedcer,
});

export default reducer;
