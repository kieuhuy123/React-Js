import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync, loadTaskAsync } from "./redux/actions/todoActions";
import Form from "./Form";
import List from "./TodoList";
const App = () => {
  //TODO: Lay dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTaskAsync());
  }, []);

  //TODO: Lay ra state
  const { todos } = useSelector((state) => state);

  return (
    <div>
      <Form />

      <List />
    </div>
  );
};

export default App;
