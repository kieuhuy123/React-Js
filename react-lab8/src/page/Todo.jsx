import { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import Todolist from "../components/Todolist";
import useTitle from "../hook/useTitle";

export const TodoContext = createContext();

export default () => {
  
  useTitle("Todo App");

  const [todos, setTodos] = useState([
    {
      id: 1000,
      title: "todo1",
      complete: false,
    },
  ]);

  const addTodo = () => console.log("todo");
  
  return (
    <TodoContext.Provider value={{
        todos,
        addTodo,
      }}
    >
      <h1>Todo</h1>
      
      <Todolist />

    </TodoContext.Provider>
  );
};
