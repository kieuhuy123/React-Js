const root = document.getElementById("root");

const Welcome = (props) => <p>Welcome, {props.name}</p>;

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
    name: "Ba",
};

const Parent = (props) => {
    return (
        <div>
            <h2>Hello Children!</h2>
            {props.children}
        </div>
    );
};

const Row = ({ name, job }) => {
    return (
        <tr>
            <td style={{ width: "100px" }}>{name}</td>
            <td>{job}</td>
        </tr>
    );
};

Row.propTypes = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
};

const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ textAlign: "left" }}>Name</th>
                    <th style={{ textAlign: "left" }}>Job</th>
                </tr>
            </thead>

            <tbody>
                <Row name="Ba" job="Developer" />
                <Row name="Phoebe" job="Data Scientist" />
                <Row name="Brian" job="Teacher" />
            </tbody>
        </table>
    );
};

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <Welcome name="Ba" />
            <Welcome name="Béo Ú" />
            <Welcome />
            <Welcome name={333} />

            <Parent>
                <p>Thử xem kết quả trên trình duyệt nhé</p>
            </Parent>

            <Table />
        </div>
    );
};

ReactDOM.render(<App />, root);
