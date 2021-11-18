import { TODO_LOADED , TODO_ADDED } from "../actions/actionType";

const initState = {
  todos: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_LOADED: {
      return {
        todos: action.payload,
      };
    }
    case TODO_ADDED: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
