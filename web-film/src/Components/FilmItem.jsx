import { Link } from "react-router-dom";

const FilmItem = ({ film }) => {
  return (
    <Link to={"/film/" + film.alias}>
      <img src={film.image} alt="" />
      <div>{film.rate}</div>
      <h2>{film.title}</h2>
    </Link>
  );
};

export default FilmItem;
