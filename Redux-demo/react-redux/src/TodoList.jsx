import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default () => {
    const { loading, error, todos } = useSelector((state) => state);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
