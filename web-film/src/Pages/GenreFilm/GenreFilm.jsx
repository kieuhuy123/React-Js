import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovieByGenre } from "../../db/NewFilm";
import useTitle from "../../Hook/useTitle";
import FilmList from "../../Components/FilmList";

import { addGenereAsync, loadFilmAsync } from "../../redux/actions/filmlist";

const GenreFilm = () => {
  const dispatch = useDispatch();
  const { loading, films } = useSelector((state) => state.film);
  const param = useParams();
  //  Genre film

  useEffect(() => {
    async function loadFilmGenre() {
      if (films.length === 0 || films.length === 1) {
        await dispatch(loadFilmAsync());
      }
    }

    loadFilmGenre();
  }, []);
  const genreFilm = films.filter((p) => p.genre.url === param.genre);
  console.log(genreFilm);
  if (loading) return <h1>Loading...</h1>;

  if (films.length === 0) return <h1>404 Error</h1>;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // useTitle(`Thể loại  - ${films[0].genre.label} - CE FILM`);

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h2 className="section-title">{`${genreFilm[0].genre.label}`} </h2>
          </div>

          <div className="tabs">
            <div className="tabs-content">
              <FilmList film={genreFilm} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GenreFilm;
