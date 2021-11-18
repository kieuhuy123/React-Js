import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/reducer";
import middleware from "./middleware/middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

const selectColors = () => {
  const state = store.getState();

  // console.log(state.color);

  const colors = state.color.showFavourite
    ? state.color.colors.filter((c) => c.favourite)
    : state.color.colors;

  return colors;
};

// console.log(selectColors());
export default store;
export { selectColors };
