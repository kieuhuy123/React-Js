import { createSlice } from "@reduxjs/toolkit";
import { getFlims } from "../db/NewFilm";
import films from "../db/NewFilm";

const movieSlice = createSlice({
  name: "movie",
  initialState: getFlims(),
});

export default movieSlice.reducer;
