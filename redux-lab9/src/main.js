import "./style.css";
import store from "./store";
import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
} from "./actions/actionType";

/*=== COUNTER-SLICE ===*/
store.subscribe(renderCounter);

const countEl = document.getElementById("count");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");

console.log(store.getState());

// action
btnIncrement.onclick = () => {
  store.dispatch({ type: INCREMENT });
};

btnDecrement.onclick = () => {
  store.dispatch({ type: DECREMENT });
};

// Render-counter
function renderCounter() {
  const { counter } = store.getState();

  console.log(counter);

  countEl.textContent = counter.count;
}

renderCounter();

/*=== TODO-SLICE ===*/
store.subscribe(renderTodo);

const todoForm = document.getElementById("todoForm");
const list = document.getElementById("list");

// action
todoForm.onsubmit = (e) => {
  e.preventDefault();

  const task = todoForm.elements.task;
  
  store.dispatch({
    type: ADD_TODO,
    payload: task.value,
  });
  
  task.value = "";
};

// render-todo
function renderTodo() {
  const { todos } = store.getState();

  list.innerHTML = "";

  for (let t of todos.todo) {
    const li = document.createElement("li");

    li.append(t.title);

    const button = document.createElement("button");

    button.onclick = () => {
      store.dispatch({
        type: REMOVE_TODO,
        payload: t.id,
      });
    };

    button.textContent = "Delete #" + t.id;

    li.append(button);

    list.append(li);
  }
}

renderTodo();
