import { Link } from "react-router-dom";
import { BsFillTagsFill } from "react-icons/bs";
import { FilmControl } from "./FilmControl";
const FilmItem = ({ film, type }) => {
  return (
    <div className="item-block">
      <div className="relative">
        <Link
          to={"/film/" + film.alias}
          // style={{ backgroundImage: `url(${film.image})` }}
        >
          <img src={film.image} alt="" className="item-block-img" />
          <div className="item-number">{film.rate}</div>
        </Link>
        <FilmControl film={film} type={type} />
      </div>

      <Link to={"/film/" + film.alias} className="item-block-title sub-title">
        {film.title}
      </Link>

      <div className="info-wrapper">
        <div className="info-block">
          <BsFillTagsFill className="info-block-icon" />
          <Link to={"/category/" + film.genre.url} className="info-title-link">
            {film.genre.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
