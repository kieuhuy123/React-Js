const root = document.getElementById("root");

const Welcome = () => <p>Welcome to ReactJS</p>;

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <Welcome />
        </div>
    );
};

ReactDOM.render(<App />, root);
