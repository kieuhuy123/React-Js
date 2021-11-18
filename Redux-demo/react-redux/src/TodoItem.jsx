import { useSelector, useDispatch } from "react-redux";
import { completeTaskAsync, deleteTaskAsync } from "./actions/todoActions";

export default ({ todo }) => {
    const { completing, deleting } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <li>
            {todo.title}

            <button
                onClick={() =>
                    todo.completed
                        ? dispatch(deleteTaskAsync(todo.id))
                        : dispatch(completeTaskAsync(todo.id))
                }
                disabled={completing === todo.id || deleting === todo.id}
            >
                {completing === todo.id
                    ? "Completing..."
                    : deleting === todo.id
                    ? "Deleting..."
                    : todo.completed
                    ? "Delete"
                    : "Complete"}
            </button>
        </li>
    );
};
