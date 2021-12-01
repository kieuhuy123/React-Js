import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/MovieSlice";

const store = configureStore({
  reducer: movieSlice,
});

export default store;
