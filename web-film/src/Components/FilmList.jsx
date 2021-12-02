// import { Link } from "react-router-dom";
// import { getFlims, getMovieByAlias } from "../db/Product";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import "./FilmList.css";
const FilmList = () => {
  //   const movies = getFlims();
  const film = useSelector((state) => state);
  console.log(film);
  return (
    <div className="item-list-wrapper">
      <Row className="item-list">
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
          <Col lg="3" key={m.id} className="item">
            <FilmItem film={m}></FilmItem>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilmList;
