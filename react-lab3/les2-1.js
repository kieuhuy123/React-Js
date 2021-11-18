class App extends React.Component{

    state = {
        todos : [
            {
                id : 1,
                title : "Hoc React"
            },
            {
                id : 2,
                title : "Hoc State"
            }
        ],
    }
    handleDelete = (id) =>{
        
        console.log(id);

        const newTodos = this.state.todos.filter((todo) => todo.id != id);
        this.setState({
            todos : newTodos
        })       

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const todo = e.target.elements.todo;

        if( todo.value.trim().length > 0){
            
            const newTodos = [

                ...this.state.todos,
                {
                    id : this.state.todos.length + 1,
                    title : todo.value.trim()
                }
            ];
            
            this.setState({
                todos : newTodos    
            })
                
        }
    }
    render(){
        return(
            <div>
                <h1>Todo App</h1>
                <TodoForm handleSubmit={this.handleSubmit}/>
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

const TodoForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <input name="todo" id="todo"></input>
        <button type="submit">Submit</button>
    </form>
}

const TodoItem = ({handleDelete,title,id}) => <li onClick={ () => handleDelete(id) }>{title}</li>;

const TodoList = ({handleDelete,todos}) => (
    <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id} handleDelete={handleDelete}  {...todo}/>
        ))}
    </ul>
)

ReactDOM.render(<App/>, document.getElementById("app"))


// funtion Component

function Welcome(props){
    return <h1>Welcome {props.name}</h1>
}


