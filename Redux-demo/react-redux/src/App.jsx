import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadTaskAsync } from "./actions/todoActions";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTaskAsync());
    }, []);

    return (
        <div>
            <h1>React Redux example</h1>

            <Form />

            <TodoList />
        </div>
    );
};

export default App;
