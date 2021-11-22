import {
  LOAD_DONE,
  LOAD_QUESTED,
  ADD_DONE,
  ADD_REQUESTED,
  COMPLETE_DONE,
  COMPLETE_REQUESTED,
  DELETE_DONE,
  DELETE_REQUESTED,
} from "../actions/actionType";

const initState = {
  loading: false,
  adding: null,
  completing: null,
  deleting: null,
  todos: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_QUESTED: {
      return { ...state, loading: true };
    }

    case LOAD_DONE: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }

    case ADD_REQUESTED: {
      return { ...state, adding: true };
    }

    case ADD_DONE: {
      return {
        ...state,
        adding: false,
        todos: [...state.todos, action.payload],
      };
    }

    case COMPLETE_REQUESTED: {
      return {
        ...state,
        completing: action.payload,
      };
    }

    case COMPLETE_DONE: {
      return {
        ...state,
        completing: null,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: true } : t
        ),
      };
    }

    case DELETE_REQUESTED: {
      return {
        ...state,
        deleting: action.payload,
      };
    }

    case DELETE_DONE: {
      return {
        ...state,
        deleting: null,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
