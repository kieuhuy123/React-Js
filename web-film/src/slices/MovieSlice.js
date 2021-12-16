import { createSlice } from "@reduxjs/toolkit";
import { getFilms } from "../db/NewFilm";
// import films from "../db/NewFilm";

const movieSlice = createSlice({
  name: "movie",
  initialState: getFilms(),
});

export default movieSlice.reducer;
