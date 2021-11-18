import React from "react";

const Tags = (props) => {
    const tags = Object.keys(props.history).map((key) => {
        return (
            <span key={key} className="tag" onClick={() => props.fetchGif(key)}>
                Get more #{key}
            </span>
        );
    });

    return <div className="tags">{tags}</div>;
};

export default Tags;
