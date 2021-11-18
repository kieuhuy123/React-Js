const root = document.getElementById("root");

const TodoItem = ({ id, title, updateTodo }) => {
    return (
        <li className="todo-item">
            {title}
            <button onClick={() => updateTodo(id)}>Done</button>
        </li>
    );
};

const TodoList = ({ todos, updateTodo }) => {
    const items = todos.map((todo) => (
        <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            updateTodo={updateTodo}
        />
    ));

    return <ul className="todo-list">{items}</ul>;
};

class TodoForm extends React.Component {
    state = {
        title: "",
    };

    handleChange = (title) => this.setState({ title });

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
        this.ref.focus();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.title}
                    ref={(node) => (this.ref = node)}
                    onChange={(e) => this.handleChange(this.ref.value)}
                />
                <button>Add</button>
            </form>
        );
    }
}

class App extends React.Component {
    uid = () => Math.floor(Math.random() * 10000);

    state = {
        todos: [
            { id: this.uid(), title: "State" },
            { id: this.uid(), title: "Props" },
            { id: this.uid(), title: "Form" },
            { id: this.uid(), title: "Ref" },
            { id: this.uid(), title: "Event" },
        ],
    };

    updateTodo = (id) =>
        this.setState((prev) => ({
            todos: prev.todos.filter((todo) => todo.id !== id),
        }));

    addTodo = (title) => {
        const todos = [
            ...this.state.todos,
            {
                id: this.uid(),
                title,
            },
        ];

        this.setState({ todos });
    };

    render() {
        return (
            <div>
                <h1>TodoApp</h1>

                <TodoForm addTodo={this.addTodo} />

                {this.state.todos.length > 0 ? (
                    <TodoList
                        todos={this.state.todos}
                        updateTodo={this.updateTodo}
                    />
                ) : (
                    <p>No todo, add one</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
