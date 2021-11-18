const Parent = (props) => {
    return <div>{props.children()}</div>;
};

class Mouse extends React.Component {
    state = {
        x: 0,
        y: 0,
    };

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    };

    render() {
        const style = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        };

        return (
            <div style={style} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        );
    }
}

const Cat = ({ mouse: { x, y } }) => {
    const style = {
        position: "absolute",
        top: y + 10,
        left: x + 10,
        width: "32px",
    };

    return <img src="mouse.png" style={style} />;
};

const App = () => {
    return (
        <div>
            <Parent>{() => <h1>Demo render props</h1>}</Parent>

            <Mouse>{(mouse) => <Cat mouse={mouse} />}</Mouse>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
