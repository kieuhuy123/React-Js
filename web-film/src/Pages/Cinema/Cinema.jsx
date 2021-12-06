import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieByType } from "../../db/NewFilm";
import FilmList from "../../Components/FilmList";
const Cinema = () => {
  const param = useParams();
  console.log(param);

  const cinema = getMovieByType(param.type);
  console.log(cinema);

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h1 className="section-title">{"Phim " + param.type}</h1>
          </div>
          <div className="tabs">
            <div className="tabs-content">
              <FilmList film={cinema} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cinema;
