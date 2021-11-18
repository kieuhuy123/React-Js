const root = document.getElementById("root");

const Child = ({ value }) => {
    return (
        <div>
            <p>Pass state to child component: {value}</p>
        </div>
    );
};

class App extends React.Component {
    // Khai báo state trong constructor
    // constructor() {
    //     super(); // gọi constructor của React.Component

    //     this.state = {
    //         countUp: 1,
    //         countDown: 100,
    //     };

    //     setInterval(this.increaseCount, 1000);
    //     setInterval(this.decreaseCount, 1000);
    // }

    // Khai báo state sử dụng class properties
    state = {
        countUp: 1,
        countDown: 100,
    };

    constructor() {
        super();

        // khai báo phương thức sử dụng class properties tránh phải bind
        // this.increaseCount = this.increaseCount.bind(this);
        setInterval(this.increaseCount, 1000);
        setInterval(this.decreaseCount, 1000);
    }

    // cập nhật state
    // gọi setState, truyền vào một object chứa state mới
    increaseCount = () => this.setState({ countUp: this.state.countUp + 1 });
    // khai báo phương thức cũng sử dụng cú pháp class properties

    // gọi setState, truyền vào hàm callback
    // hàm cập nhật state có thể nhận 2 callback
    // callback đầu tiên để cập nhật, nhận 2 tham số previousState và props
    // callback thứ 2 được gọi sau khi state cập nhật xong
    decreaseCount = () => {
        this.setState(
            (previousState, props) => {
                console.log("Before:", previousState.countDown);
                // state tự động merge
                return {
                    countDown: previousState.countDown - 1,
                };
            },
            () => {
                console.log("After:", this.state.countDown);
            }
        );
    };

    render() {
        const { countUp, countDown } = this.state;

        return (
            <div>
                <p>CountUp: {countUp}</p>
                <p>CountDown: {countDown}</p>

                <Child value={countDown} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
