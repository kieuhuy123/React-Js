const middleware = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      if (typeof action == "function") {
        return action(dispatch, getState);
      } else {
        next(action);
      }
    };
  };
};

export default middleware;
