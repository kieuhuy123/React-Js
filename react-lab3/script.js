class App extends React.Component {
  state = {
    todos: [
        { id: 1, title: "react" },
      { id: 2, title: "state" },
    ],
    onMouseOver: false,
  };
  submitForm = (e) => {
     e.preventDefault();

    const todo = e.target.elements.todo;

    if (todo.value.trim().length > 0) {
      const newTodos = [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          title: todo.value.trim(),
        },
      ];

      this.setState({
        todos: newTodos,
      });

      todo.value = "";
    }
  };

  formDelete = (id) => {
    console.log(id);

    const newTodos = this.state.todos.filter((todo) => todo.id != id);

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <h1>todo list</h1>
        <TodoForm submitForm={this.submitForm} />
        <TodoList todos={this.state.todos} formDelete={this.formDelete} />
      </div>
    );
  }
}

const TodoItem = ({ formDelete, title, id }) => (
  <li onClick={() => formDelete(id)}>{title}</li>
);

const TodoForm = ({ submitForm }) => {
  return (
    <form onSubmit={submitForm}>
      <input name="todo" id="todo" />
      <button type="submit">Add todo</button>
    </form>
  );
};

const TodoList = ({ formDelete, todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} formDelete={formDelete} {...todo} />
    ))}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("App"));
