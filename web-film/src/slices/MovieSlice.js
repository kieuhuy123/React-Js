import { createSlice } from "@reduxjs/toolkit";
import { getFlims } from "../db/Product";
import films from "../db/Product";

const movieSlice = createSlice({
  name: "movie",
  initialState: getFlims(),
});

export default movieSlice.reducer;
