import { useSelector, useDispatch } from "react-redux";
import { up, down } from "./redux/actions";
const App = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(up())}>+</button>
      <button onClick={() => dispatch(down())}>-</button>
    </div>
  );
};

export default App;
