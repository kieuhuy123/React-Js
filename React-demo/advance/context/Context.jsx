const defaultCounter = {};
const defaultTheme = "light";

const ThemeContext = React.createContext(defaultTheme);
ThemeContext.displayName = "ThemeContext";

const CounterContext = React.createContext(defaultCounter);
CounterContext.displayName = "CounterContext";

const Button = ({ onClick, children }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => {
                return (
                    <button className={"btn btn-" + theme} onClick={onClick}>
                        {children}
                    </button>
                );
            }}
        </ThemeContext.Consumer>
    );
};

const Controls = () => {
    return (
        <ThemeContext.Consumer>
            {({ toggleTheme }) => {
                return (
                    <CounterContext.Consumer>
                        {({ increment, decrement }) => {
                            return (
                                <div>
                                    <Button onClick={increment}>Up</Button>
                                    <Button onClick={decrement}>Down</Button>
                                    <Button onClick={toggleTheme}>
                                        Change Theme
                                    </Button>
                                </div>
                            );
                        }}
                    </CounterContext.Consumer>
                );
            }}
        </ThemeContext.Consumer>
    );
};

class App extends React.Component {
    state = {
        count: 0,
        theme: "light",
    };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });
    toggleTheme = () =>
        this.setState((prev) => ({
            theme: prev.theme == "light" ? "dark" : "light",
        }));

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                <CounterContext.Provider
                    value={{
                        count: this.state.count,
                        increment: this.increment,
                        decrement: this.decrement,
                    }}
                >
                    <div className={this.state.theme}>
                        <CounterContext.Consumer>
                            {({ count }) => <h1>{count}</h1>}
                        </CounterContext.Consumer>

                        <Controls />
                    </div>
                </CounterContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
