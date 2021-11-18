const ButtonLike = ({ id, status, handleLike }) => {
  const icon = status ? (
    <i className="bi bi-heart-fill"></i>
  ) : (
    <i className="bi bi-heart"></i>
  );

  return (
    <button className="btn-like" onClick={() => handleLike(id)}>
      {icon}
    </button>
  );
};

const ButtonDelete = ({ id, handleDelete }) => {
  return (
    <button className="btn btn-delete" onClick={() => handleDelete(id)}>
      <i className="bi bi-backspace"></i>
    </button>
  );
};

const FilterItem = ({ active, label, onChange }) => {
  return (
    <li className="nav-item">
      <a className={"nav-link  " + (active ? "active" : "")} onClick={onChange}>
        {label}
      </a>
    </li>
  );
};

const Filter = ({ onChange, showFavorite }) => {
  return (
    <ul className="nav justify-content-end">
      <FilterItem
        onChange={() => onChange(false)}
        label="all"
        active={!showFavorite}
      />
      <FilterItem
        onChange={() => onChange(true)}
        label="favorite"
        active={!showFavorite}
      />
    </ul>
  );
};

const Item = ({ images, handleLike, handleDelete }) => {
  return (
    <div className="col-3">
      <div className="item">
        <img src={images.url}></img>
        <div className="action">
          <ButtonLike
            status={images.like}
            id={images.id}
            handleLike={handleLike}
          />
          <ButtonDelete id={images.id} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

const List = ({ images, handleLike, handleDelete }) => {
  return (
    <div className="list">
      <div className="row">
        {images.map((images, i) => (
          <Item
            key={i}
            images={images}
            handleLike={handleLike}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

class Form extends React.Component {
  state = {
    url: "",
  };

  handleInput = (value) => {
    this.setState({ url: value });
  };
  handleSubmit = (e) => {
    console.log(this.state.url);
    e.preventDefault();
    this.props.handleSubmit(this.state.url);
    this.setState({ url: "" });
    this.ref.focus();
  };
  render() {
    return (
      <form className="row g-3" onSubmit={this.handleSubmit}>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden"></label>
          <input
            className="form-control"
            id="inputPassword2"
            placeholder="Url"
            value={this.state.url}
            onChange={(e) => this.handleInput(e.target.value)}
            ref={(node) => (this.ref = node)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    id: 5,
    showFavorite: false,
    images: [
      {
        id: 1,
        url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png",
        like: false,
      },
      {
        id: 2,
        url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png",
        like: false,
      },
      {
        id: 3,
        url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png",
        like: false,
      },
      {
        id: 4,
        url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png",
        like: false,
      },
      {
        id: 5,
        url: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/8be55a3ff2b24890fac0b9e2415dda9d0f893c1f.png",
        like: false,
      },
    ],
  };
  handleLike = (id) => {
    this.setState((prev) => {
      const newState = { ...prev };
      const item = newState.images.find((image) => image.id === id);
      console.log(item.like);
      item.like = !item.like;
      return newState;
    });
  };
  handleDelete = (id) => {
    this.setState((prev) => {
      const newImage = prev.images.filter((image) => image.id !== id);
      return {
        ...prev,
        images: newImage,
      };
    });
  };

  handleFilter = (status) => {
    this.setState((prev) => {
      return {
        ...prev,
        showFavorite: status,
      };
    });
  };

  handleAddPic = (url) => {
    this.setState((prev) => {
      const newImg = [
        ...prev.images,
        {
          id: prev.id,
          url: url,
          like: false,
        },
      ];
      return {
        ...prev,
        id: prev.id + 1,
        images: newImg,
      };
    });
  };
  render() {
    const images = this.state.showFavorite
      ? this.state.images.filter((img) => img.like)
      : this.state.images;
    return (
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading">My Gallery</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <Form handleSubmit={this.handleAddPic} />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col">
              <Filter
                onChange={this.handleFilter}
                showFavorite={this.state.showFavorite}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <List
                images={images}
                handleLike={this.handleLike}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
