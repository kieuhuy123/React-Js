import React from "react";

class Gif extends React.Component {
    constructor(props) {
        super(props);

        this.props.addPromise(
            new Promise((resolve, reject) => {
                this.loaded = resolve;
            })
        );
    }

    render() {
        return (
            <div className="gif" ref={(el) => (this.gif = el)}>
                <img
                    onLoad={() => this.loaded(this.gif)}
                    className="gif-image"
                    src={this.props.img.url}
                    alt={this.props.img.title}
                />
            </div>
        );
    }
}

export default Gif;
