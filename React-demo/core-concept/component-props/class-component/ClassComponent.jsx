const root = document.getElementById("root");

class Welcome extends React.Component {
    render() {
        return <p>Welcome to ReactJS</p>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <Welcome />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
