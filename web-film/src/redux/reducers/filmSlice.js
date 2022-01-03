import {
  LOAD_DONE,
  LOAD_REQUESTED,
  
} from "../actions/actions";

const initalState = {
  loading: false,
  films: [],
  
};

const filmReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_DONE: {
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    }

    default:
      return state;
  }
};

export default filmReducer;
