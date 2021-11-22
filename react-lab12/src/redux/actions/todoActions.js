import {
  LOAD_DONE,
  LOAD_QUESTED,
  ADD_DONE,
  ADD_REQUESTED,
  COMPLETE_DONE,
  COMPLETE_REQUESTED,
  DELETE_DONE,
  DELETE_REQUESTED,
} from "./actionType";

/*=== TODO: Loaded === */

export const loadRequested = () => ({ type: LOAD_QUESTED });
export const loadDone = (data) => ({ type: LOAD_DONE, payload: data });

export const loadTaskAsync = () => (dispatch) => {
  dispatch(loadRequested());

  return fetch("/api/todos")
    .then((res) => res.json())
    .then((data) => dispatch(loadDone(data.todos)));
};

/*=== TODO: ADDED === */
export const addRequested = () => ({ type: ADD_REQUESTED });
export const addDone = (data) => ({ type: ADD_DONE, payload: data });

export const addTaskAsync = (task) => (dispatch) => {
  dispatch(addRequested());

  return fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: task, completed: false }),
  })
    .then((res) => res.json())
    .then(({ todo }) => dispatch(addDone(todo)));
};
/*=== TODO: COMPELETED === */
export const compeleteRequested = (data) => ({
  type: COMPLETE_REQUESTED,
  payload: data,
});
export const compeleteDone = (data) => ({ type: COMPLETE_DONE, payload: data });

export const completeTaskAsync = (id) => (dispatch) => {
  dispatch(compeleteRequested(id));

  return fetch("/api/todos/" + id, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then(() => dispatch(compeleteDone(id)));
};
/*=== TODO: DELETED === */
export const deleteRequested = (data) => ({
  type: DELETE_REQUESTED,
  payload: data,
});
export const deleteDone = (data) => ({ type: DELETE_DONE, payload: data });

export const deleteTaskAsync = (id) => (dispatch) => {
  dispatch(deleteRequested(id));

  return fetch("/api/todos/" + id, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 204) dispatch(deleteDone(id));
  });
};
