import { ADD_TODO, REMOVE_TODO } from "../actions/actionType";

const initState = {
  todo: [],
  id: 1,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todo: [
          ...state.todo,
          {
            id: state.id,
            title: action.payload,
          },
        ],
        id: state.id + 1,
      };
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((t) => t.id != action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
