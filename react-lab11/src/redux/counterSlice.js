import { UP, DOWN } from "./actions";

const initState = {
  value: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case UP: {
      return { value: state.value + 1 };
    }

    case DOWN: {
      return { value: state.value - 1 };
    }

    default:
      return state;
  }
};

export default counterReducer;
