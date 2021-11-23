import { useSelector } from "react-redux";
import Item from "./TodoItem";
export default () => {
  const { loading, todos } = useSelector((state) => state);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((t) => (
        <Item key={t.id} todo={t} />
      ))}
    </ul>
  );
};
