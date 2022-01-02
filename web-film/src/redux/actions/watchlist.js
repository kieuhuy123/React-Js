import {
  ADD_FILM_TO_WATCHLIST,
  REMOVE_FILM_FROM_WATCHLIST,
  ADD_FILM_TO_WATCHED,
  REMOVE_FILM_FROM_WATCHED,
  MOVE_TO_WATCHLIST,
} from "./actions.js";

// TODO: add to watchlist

export const addFilmToWatchlist = (movie) => ({
  type: ADD_FILM_TO_WATCHLIST,
  payload: movie,
});

export const removeFilmFromWatchlist = (id) => ({
  type: REMOVE_FILM_FROM_WATCHLIST,
  payload: id,
});

export const addFilmToWatched = (movie) => ({
  type: ADD_FILM_TO_WATCHED,
  payload: movie,
});

export const removeFilmFromWatched = (id) => ({
  type: REMOVE_FILM_FROM_WATCHED,
  payload: id,
});

export const moveToWatchlist = (movie) => ({
  type: MOVE_TO_WATCHLIST,
  payload: movie,
});
