class App extends React.Component {
    state = {
        id: null,
    };

    componentDidMount = () => {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

        this.setState({ id });
    };

    render() {
        return <h1>Product: {this.state.id}</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
