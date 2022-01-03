import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieByType } from "../../db/NewFilm";
import FilmList from "../../Components/FilmList";
import useTitle from "../../Hook/useTitle";
import { addTypeAsync, loadFilmAsync } from "../../redux/actions/filmlist";
const Cinema = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { films, loading, type } = useSelector((state) => state.film);

  //Add type film
  useEffect(() => {
    async function loadFilmType() {
      if (films.length === 0 || films.length === 1) {
        await dispatch(loadFilmAsync());
      }
    }
    if (films.length === 0) {
      document.title = "Error";
    } else {
       (document.title = `${films[0].type.label}`);
    }

    loadFilmType();
  }, []);

  const typeFilm = films.filter((p) => p.type.url === param.type);
  if (loading) return <h1>Loading...</h1>;

  if (typeFilm.length === 0) return <h1>404 Error</h1>;
  console.log(typeFilm);

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
