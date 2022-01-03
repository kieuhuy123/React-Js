import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FilmList from "../../Components/FilmList";
// import useTitle from "../../Hook/useTitle";

import { loadFilmAsync } from "../../redux/actions/filmlist";

const Cinema = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { films, loading } = useSelector((state) => state.film);

  //Add type film
  useEffect(() => {
    async function loadFilmType() {
      if (films.length === 0 || films.length === 1) {
        await dispatch(loadFilmAsync());
      }
    }

    loadFilmType();
  }, [dispatch, films.length]);

  const typeFilm = films.filter((p) => p.type.url === param.type);
  // TODO: Set title, loading, error
  if (typeFilm.length === 0) {
    document.title = "Error";
  } else {
    document.title = `${typeFilm[0].type.label}`;
  }

  if (loading) return <h1>Loading...</h1>;
  if (typeFilm.length === 0) return <h1>404 Error</h1>;

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h2 className="section-title">{`${typeFilm[0].type.label} `}</h2>
          </div>
          <div className="tabs">
            <div className="tabs-content">
              <FilmList film={typeFilm} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cinema;
