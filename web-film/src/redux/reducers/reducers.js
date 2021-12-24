import {
  ADD_FILM_TO_WATCHLIST,
  REMOVE_FILM_FROM_WATCHLIST,
  ADD_FILM_TO_WATCHED,
  REMOVE_FILM_FROM_WATCHED,
  MOVE_TO_WATCHLIST,
} from "../actions/actions";

const initalState = {
  watchlist: [],
  watched: [],
};

const watchlistReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FILM_TO_WATCHLIST: {
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    }

    case REMOVE_FILM_FROM_WATCHLIST: {
      return {
        ...state,
        watchlist: state.watchlist.filter((film) => film.id !== action.payload),
      };
    }
    case ADD_FILM_TO_WATCHED: {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (film) => film.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    }
    case REMOVE_FILM_FROM_WATCHED: {
      return {
        ...state,
        watched: state.watched.filter((film) => film.id !== action.payload),
      };
    }
    case MOVE_TO_WATCHLIST: {
      return {
        ...state,
        watched: state.watched.filter((film) => film.id !== action.payload.id),
        watchlist: [...state.watchlist, action.payload],
      };
    }

    default:
      return state;
  }
};

export default watchlistReducer;
