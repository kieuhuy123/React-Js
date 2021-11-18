import Isotope from "isotope-layout";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gif from "./Gif";
import SearchForm from "./SearchForm";

const KEY = "y552Ig0rBsEWCcvr10kYKLiEkmyHutLT";
const SEARCH_API =
    "https://api.giphy.com/v1/gifs/search?&limit=5&api_key=" + KEY;

class GiphyApp extends Component {
    initState = {
        gifs: [],
        msg: "Enter keyword to search gif",
        query: "",
        history: {},
    };

    state = this.initState;

    initIsotope = (el) => {
        this.isotope = new Isotope(el, {
            itemSelector: ".gif",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".grid-gutter",
            },
        });
    };

    handleChange = (e) => this.setState({ query: e.target.value });

    handleClear = () => {
        this.setState(this.initState);
        this.search.focus();
    };

    fetchGif = (query) => {
        const newHistory = { ...this.state.history };
        newHistory[query] = newHistory[query] + 25 || 0;

        let offset = newHistory[query];

        fetch(`${SEARCH_API}&q=${query}&offset=${offset}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.data.length > 0) {
                    const promises = [];

                    const gifs = res.data
                        .map((gif) => {
                            return { id: gif.id, img: gif.images.original };
                        })
                        .map((gif) => (
                            <Gif
                                key={gif.id}
                                img={gif.img}
                                addPromise={(p) => promises.push(p)}
                            />
                        ));

                    const newGifs = [...this.state.gifs, ...gifs];

                    this.setState({
                        gifs: newGifs,
                        history: newHistory,
                        msg: this.initState.msg,
                        query: this.initState.query,
                        fetched: true,
                    });

                    Promise.allSettled(promises).then((gifs) => {
                        console.log("All loaded");
                        this.isotope.arrange();

                        gifs.forEach(({ value }) =>
                            value.classList.add("loaded")
                        );
                    });
                } else {
                    this.setState({
                        msg: `No result for: '${query}'`,
                        query: this.initState.query,
                        fetched: false,
                    });
                }

                this.searchRef.focus();
            })
            .catch(console.log);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const query = this.state.query
            .trim()
            .replace(/[\s+]{2,}/g, " ")
            .toLowerCase();

        if (query.length == 0) {
            this.searchRef.focus();
            return;
        }

        this.fetchGif(query);
    };

    componentDidMount = () => {
        this.initIsotope(this.gridRef);
        this.searchRef.focus();
    };

    componentDidUpdate = () => {
        this.isotope.reloadItems();
    };

    render() {
        return (
            <>
                <header className="header">
                    <div className="container">
                        <h1 className="heading">Giphy API</h1>

                        <SearchForm
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleClear={this.handleClear}
                            msg={this.state.msg}
                            value={this.state.query}
                            searchRef={(el) => (this.searchRef = el)}
                            history={this.state.history}
                            fetchGif={this.fetchGif}
                        />
                    </div>
                </header>

                <div className="container">
                    <div
                        className="list-gifs"
                        ref={(el) => (this.gridRef = el)}
                    >
                        <div className="grid-sizer"></div>
                        <div className="grid-gutter"></div>
                        {this.state.gifs}
                    </div>
                </div>
            </>
        );
    }
}

ReactDOM.render(<GiphyApp />, document.getElementById("root"));
