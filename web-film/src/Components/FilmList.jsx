// import { Link } from "react-router-dom";
// import { getFlims, getMovieByAlias } from "../db/Product";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";

const FilmList = () => {
  //   const movies = getFlims();
  const film = useSelector((state) => state);
  console.log(film);
  return (
    <div className="item">
      {/* {movies.map((m) => (
        <div key={m.id}>
          <Link to={"/film/" + m.alias}>
            <h2>{m.title}</h2>
            <img src={m.image} alt="" />
            <p>{m.rate}</p>
          </Link>
        </div>
      ))} */}
      {film.map((m) => (
        <div key={m.id} className="item-block">
          <FilmItem film={m}></FilmItem>
        </div>
      ))}
    </div>
  );
};

export default FilmList;
