import React, { Component } from "react";
import Tags from "./Tag";

class SearchForm extends Component {
    render() {
        return (
            <form className="search" onSubmit={this.props.handleSubmit}>
                <input
                    type="search"
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    ref={this.props.searchRef}
                    placeholder={this.props.msg}
                />

                <div className="actions">
                    <button type="submit" className="button button-submit">
                        Search
                    </button>
                    <button
                        onClick={this.props.handleClear}
                        type="button"
                        className="button button-clear"
                    >
                        Clear
                    </button>
                </div>

                <Tags
                    history={this.props.history}
                    fetchGif={this.props.fetchGif}
                />
            </form>
        );
    }
}

export default SearchForm;
