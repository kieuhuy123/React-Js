import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync, loadTaskAsync } from "./redux/actions/todoActions";
import Form from "./components/Form";
import List from "./components/TodoList";
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
      <h1>Demo Todo React-redux</h1>
      <Form />

      <List />
    </div>
  );
};

export default App;
