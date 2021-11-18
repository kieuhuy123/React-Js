const root = document.getElementById("root");

const Product = ({
    product: { id, title, price, category, description, image },
}) => {
    return (
        <div className="product">
            <div className="product-thumbnail">
                <img src={image} alt={title} />
            </div>
            <div className="product-description">
                <p className="product-category">{category}</p>
                <h2 className="product-name">
                    <a href={"detail.html?id=" + id}>{title}</a>
                </h2>
                <p className="product-price">{price}</p>
            </div>
        </div>
    );
};

const ProductList = ({ products }) => {
    let items = "<p>There are no product</p>";

    if (products.length > 0)
        items = products.map((p) => <Product key={p.id} product={p} />);

    return <div className="product-list">{items}</div>;
};

class Timer extends React.Component {
    state = {
        count: 0,
    };

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            });
        }, 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
        console.log("Interval has been cleared!");
    };

    render() {
        return <p>Count: {this.state.count}</p>;
    }
}

class App extends React.Component {
    state = {
        showTimer: false,
        loading: true,
        error: null,
        products: [],
    };

    componentDidMount = () => {
        this.setState({ loading: true });

        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((products) =>
                setTimeout(
                    () => this.setState({ loading: false, products }),
                    1000
                )
            )
            .catch((error) =>
                setTimeout(() => this.setState({ loading: false, error }), 1000)
            );
    };

    render() {
        const { loading, error, products, showTimer } = this.state;

        const timer = showTimer ? <Timer /> : <p>No timer</p>;

        if (loading) {
            return <div>Loading data...</div>;
        }

        if (error) {
            return (
                <div>
                    <p>Oops! Got error: {this.state.error} </p>
                </div>
            );
        }

        return (
            <div className="container">
                {timer}

                <button
                    onClick={() => this.setState({ showTimer: !showTimer })}
                >
                    {showTimer ? "Hide timer" : "Show timer"}
                </button>

                <h1>Products List</h1>

                <ProductList products={products} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
