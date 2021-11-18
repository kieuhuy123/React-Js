import { DECREMENT, INCREMENT } from "../actions/actionType";

const initState = {
  count: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
