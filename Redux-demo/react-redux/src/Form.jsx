import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTaskAsync } from "./actions/todoActions";

export default () => {
    const [task, setTask] = useState("");
    const { adding } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (adding) return;

        const trimmed = task.trim();

        if (trimmed) dispatch(addTaskAsync(trimmed)).then(() => setTask(""));
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                disabled={adding}
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button disabled={adding} type="submit">
                {adding ? "Adding..." : "Add"}
            </button>
        </form>
    );
};
