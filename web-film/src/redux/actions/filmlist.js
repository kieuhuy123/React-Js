import {
  LOAD_DONE,
  LOAD_REQUESTED,
  
} from "./actions.js";

// TODO: Load film
export const loadRequested = () => ({ type: LOAD_REQUESTED });
export const loadDone = (data) => ({ type: LOAD_DONE, payload: data });

export const loadFilmAsync = () => (dispatch) => {
  dispatch(loadRequested());

  return fetch("/api/movies")
    .then((res) => res.json())
    .then((data) => dispatch(loadDone(data.movies)));
};

