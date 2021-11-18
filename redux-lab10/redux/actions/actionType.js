export const NEW_COLOR = "newColor";
export const TOGGLE_COLOR = "likeColor";
export const SHOW_FAVOURITE = "showFavourite";

export const newColor = (name, color) => ({
  type: NEW_COLOR,
  payload: { name, color },
});

export const toggleColor = (id) => ({ type: TOGGLE_COLOR, payload: id });
export const showFavourite = () => ({ type: SHOW_FAVOURITE });

/*=== loadTodoAsync ===*/
export const TODO_LOADED = "todo/loaded";
export const todoLoaded = (todos) => ({ type: TODO_LOADED, payload: todos });

export const loadTodoAsync = () => {
  return (dispatch, getState) => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then(({ todos }) => {
        dispatch(todoLoaded(todos));
      });
  };
};

/*=== addTodoAsync ===*/
export const TODO_ADDED = "todo/added";
export const todoAdded = (todo) => ({ type: TODO_ADDED, payload: todo });

export const addTodoAsync = (title) => {
  return (dispatch, getState) => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    })
      .then((res) => res.json())
      .then(({ todo }) => {
        dispatch(todoAdded(todo));
      });
  };
};
