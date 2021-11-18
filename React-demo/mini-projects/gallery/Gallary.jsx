const LikeButton = ({ id, status, likePicture }) => {
    const icon = status ? (
        <i className="bi bi-heart-fill" />
    ) : (
        <i className="bi bi-heart" />
    );

    return (
        <button onClick={() => likePicture(id)} className="btn btn-like">
            {icon}
        </button>
    );
};

const DeleteButton = ({ id, delPicture }) => {
    return (
        <button onClick={() => delPicture(id)} className="btn btn-delete">
            <i class="bi bi-x-lg"></i>
        </button>
    );
};

const Item = ({ image, likePicture, delPicture }) => {
    return (
        <div className="item">
            <img src={image.url} />

            <div className="actions">
                <LikeButton
                    id={image.id}
                    status={image.liked}
                    likePicture={likePicture}
                />
                <DeleteButton id={image.id} delPicture={delPicture} />
            </div>
        </div>
    );
};

const List = ({ images, likePicture, delPicture }) => {
    return (
        <div className="list">
            <div className="row">
                {images.map((image, i) => (
                    <div key={i} className="col-3">
                        <Item
                            likePicture={likePicture}
                            delPicture={delPicture}
                            image={image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FilterItem = ({ active, children, onChange }) => {
    return (
        <li class="nav-item">
            <a
                class={"nav-link " + (active ? "active" : "")}
                onClick={onChange}
            >
                {children}
            </a>
        </li>
    );
};

class Form extends React.Component {
    state = {
        url: "",
    };

    handleChange = (value) => {
        this.setState({ url: value.trim() });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.url);
        this.setState({ url: "" });
        this.ref.focus();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3 input-group">
                    <input
                        type="text"
                        class="form-control"
                        value={this.state.url}
                        onChange={(e) => this.handleChange(e.target.value)}
                        ref={(node) => (this.ref = node)}
                    />
                    <button type="submit" class="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

class App extends React.Component {
    uid = () => Math.floor(Math.random() * 10000);

    state = {
        showFavourite: false,
        images: [
            {
                id: this.uid(),
                url: "https://newsmd1fr.keeng.net/netnews/archive/images/2019122617/tinngan_052713_909620546_1.jpg",
                liked: false,
            },
            {
                id: this.uid(),
                url: "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-31/anh-4-1622435533-350-width650height813.jpg",
                liked: true,
            },
            {
                id: this.uid(),
                url: "https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg",
                liked: false,
            },
            {
                id: this.uid(),
                url: "https://kenh14cdn.com/203336854389633024/2021/5/7/photo-1-1620357519578885309410.jpg",
                liked: false,
            },
        ],
    };

    likePicture = (id) => {
        this.setState((prev) => {
            const images = [...prev.images];

            const item = images.findIndex((image) => image.id === id);
            const newImage = { ...images[item] };

            newImage.liked = !newImage.liked;
            images.splice(item, 1, newImage);

            return {
                ...prev,
                images,
            };
        });
    };

    delPicture = (id) => {
        this.setState((prev) => {
            const newImages = prev.images.filter((image) => image.id !== id);

            return {
                ...prev,
                images: newImages,
            };
        });
    };

    showFavourite = (status) => {
        this.setState((prev) => {
            return {
                ...prev,
                showFavourite: status,
            };
        });
    };

    addPicture = (url) => {
        if (!url.trim()) return;

        this.setState((prev) => {
            const images = [
                ...prev.images,
                {
                    id: this.uid(),
                    url,
                    like: false,
                },
            ];

            return {
                ...prev,
                images,
            };
        });
    };

    render() {
        const { showFavourite } = this.state;

        const images = showFavourite
            ? this.state.images.filter((image) => image.liked)
            : this.state.images;

        return (
            <div className="gallery-app">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="app-heading text-center">
                                My Gallery
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-5">
                            <Form onSubmit={this.addPicture} />
                        </div>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col">
                            <ul className="nav justify-content-end">
                                <FilterItem
                                    active={!showFavourite}
                                    onChange={() => this.showFavourite(false)}
                                >
                                    All Pictures
                                </FilterItem>
                                <FilterItem
                                    active={showFavourite}
                                    onChange={() => this.showFavourite(true)}
                                >
                                    Favourite
                                </FilterItem>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <List
                                likePicture={this.likePicture}
                                delPicture={this.delPicture}
                                images={images}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
