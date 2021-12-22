import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

import { getMovieByGenre } from "../../db/NewFilm";
import useTitle from "../../Hook/useTitle";
import FilmList from "../../Components/FilmList";

const GenreFilm = () => {
  const param = useParams();
  console.log(param);

  const genre = getMovieByGenre(param.genre);
  
  if (genre.length === 0) return <h1>404 Error</h1>;

  if (genre) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTitle(`Thể loại  - ${genre[0].genre.label} - CE FILM`);
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h2 className="section-title">{genre[0].genre.label}</h2>
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
