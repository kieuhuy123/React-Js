import { createStore } from "redux";
import { reducer } from "./reducers/reducer";

const reduxDevtools = () =>
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevtools());

export const counterSelector = () => store.getState().counter.count;
export const todoSelector = () => store.getState().todo.todos;
