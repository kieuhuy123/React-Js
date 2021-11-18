const root = document.getElementById("root");

const Control = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

class App extends React.Component {
    state = {
        counting: false,
        count: 0,
    };

    startCount = () => {
        this.timer = setInterval(() => {
            this.setState((prev) => ({ count: prev.count + 1 }));
        }, 1000);

        this.setState({ counting: true });
    };

    stopCount = () => {
        clearInterval(this.timer);

        this.setState({ counting: false });
    };

    handleCount = () => {
        if (this.state.counting) this.stopCount();
        else this.startCount();
    };

    countUp = () => this.setState((prev) => ({ count: prev.count + 10 }));

    countDown = () => this.setState((prev) => ({ count: prev.count - 10 }));

    passParams = (e, ...params) => {
        console.log(params);
    };

    render() {
        const { couting, count } = this.state;

        return (
            <div>
                <p>
                    Count: {count} time{count > 1 ? "s" : ""}
                </p>

                {/* Event trong React được gọi là SyntheticEvent */}
                {/* Gần như tương tự event trong DOM */}
                {/* Khác biệt về tên, sử dụng cú pháp camelCase */}
                <button onClick={this.handleCount}>
                    {couting ? "Stop" : "Start"}
                </button>

                {/* Event object tương tự DOM */}
                <button onClick={(e) => console.log(e)}>Click me!</button>

                {/* Truyền thêm tham số cho handler */}
                <button onClick={(e) => this.passParams(e, count)}>
                    Click em đi!
                </button>

                {/* Pass update function to child component */}
                <div>
                    <Control onClick={this.countUp}>Count Up</Control>
                    <Control onClick={this.countDown}>Count Down</Control>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
