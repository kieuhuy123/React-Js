const root = document.getElementById("root");

class ControlledForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();

        let { firstName, lastName } = this.state;
        alert(`Welcome, ${firstName} ${lastName}!`);
    };

    render() {
        let { firstName, lastName } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Tell me who you are?</p>
                <div>
                    <input
                        type="text"
                        placeholder="Your Firstname"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Your Lastname"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                    />

                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

class ControlledWithValidate extends React.Component {
    state = { username: "", error: null };

    handleChange = (e) => {
        let value = e.target.value;

        this.setState({
            username: value.slice(0, 8),
            error: /[^a-zA-Z0-9]/gi.test(value),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.username && !this.state.error)
            alert(`Hello, ${this.state.username}!`);
        else this.username.focus();
    };

    render() {
        let error;

        if (this.state.error)
            error = (
                <span style={{ fontSize: "0.8em", color: "red" }}>
                    * Only lowercase letters or numbers
                </span>
            );

        return (
            <div>
                <p>Create your username (max 8 characters).</p>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            onChange={this.handleChange}
                            placeholder="Enter your username"
                            name="username"
                            value={this.state.username}
                            ref={(inputNode) => (this.username = inputNode)}
                        />
                        <button>Submit</button>
                    </div>

                    {error}
                </form>
            </div>
        );
    }
}

class UncontrolledForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        let firstName = this.firstNameNode.value;
        let lastName = this.lastNameNode.value;

        alert(`Welcome, ${firstName} ${lastName}!`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Tell me who you are?</p>

                <div>
                    <input
                        type="text"
                        placeholder="Your Firstname"
                        name="firstName"
                        ref={(firstNameNode) =>
                            (this.firstNameNode = firstNameNode)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Your Lastname"
                        name="lastName"
                        ref={(lastNameNode) =>
                            (this.lastNameNode = lastNameNode)
                        }
                    />

                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

const App = () => {
    return (
        <div className="container">
            <h1>Controlled vs Uncontrolled Components</h1>

            <div>
                <h3>Controlled Form</h3>

                <ControlledForm />
            </div>

            <div>
                <h3>Controlled Form vs Validate and Ref</h3>

                <ControlledWithValidate />
            </div>

            <div>
                <h3>Uncontrolled Form</h3>

                <UncontrolledForm />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, root);
