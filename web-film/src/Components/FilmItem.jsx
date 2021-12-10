import { Link } from "react-router-dom";

const FilmItem = ({ film }) => {
  return (
    <div className="item-block">
      <Link
        to={"/film/" + film.alias}
        style={{ backgroundImage: `url(${film.image})` }}
        className="item-block-img"
      >
        <div className="item-number">{film.rate}</div>
      </Link>
      <img
        className="info-block-icon block"
        src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
        alt=""
      />
      <Link to={"/film/" + film.alias} className="item-block-title">
        {film.title}
      </Link>

      <div className="info-wrapper">
        <div className="info-block">
          <img
            src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
            alt=""
            className="info-block-icon"
          />
          <Link to={"/category/" + film.genre.url} className="info-title-link">
            {film.genre.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
