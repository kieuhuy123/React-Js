import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getMovieByGenre } from "../../db/NewFilm";
import FilmList from "../../Components/FilmList";

const GenreFilm = () => {
  const param = useParams();
  console.log(param);

  const genre = getMovieByGenre(param.genre);
  // const film = useSelector((state) => state);
  // console.log(film);
  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h1 className="section-title">{genre[0].genre.label}</h1>
          </div>
          <div className="tabs">
            <div className="tabs-content">
              <FilmList film={genre} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GenreFilm;
