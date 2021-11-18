const todos = [
    { id: 1, title: "LoL", completed: true },
    { id: 2, title: "Pussy", completed: false },
    { id: 3, title: "", completed: false },
];

const TodoItem = (props) => {
    const { id, title, completed } = props.todo;

    // return null -> no display
    if (!title) return null;

    return (
        // custom class
        <li className={`todo-item ${completed ? "completed" : ""}`}>
            {title}

            {/* render by completed */}
            {!completed && <button>Done</button>}
        </li>
    );
};

const App = () => {
    return (
        <div>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} />
            ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
