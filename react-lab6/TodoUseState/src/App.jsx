import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function Item({ todo: { id, title, completed }, completedTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completedTodo(id)}
      />
      {title}
    </li>
  );
}

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length == 0) return;
    else {
      addTodo(title.trim());
    }

    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

function App() {

  const [todo, setTodo] = useState([
    { id: 100, title: "Learn useState", completed: false },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timmer = setInterval(() => setCount(count + 1), 1000);

    return () => clearInterval(timmer);
  });
  const uid = () => Math.floor(Math.random() * 9000) + 1001;

  const addTodo = (title) => {
    setTodo([
      ...todo,
      {
        id: uid(),
        title,
        completed: false,
      },
    ]);
  };
  
  const completedTodo = (id) => {
    setTodo(
      todo.map((todos) =>
        todos.id == id
          ? {
              ...todos,
              completed: !todos.completed,
            }
          : todos
      )
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Todo App</p>
        <Form addTodo={addTodo} />
        <ul>
          {todo.map((todo) => (
            <Item key={todo.id} todo={todo} completedTodo={completedTodo} />
          ))}
        </ul>
        <p>Count:{count}</p>
      </header>
    </div>
  );
}

export default App;
