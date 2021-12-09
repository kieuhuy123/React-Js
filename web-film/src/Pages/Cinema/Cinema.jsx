import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { getMovieByType } from "../../db/NewFilm";
import FilmList from "../../Components/FilmList";
import useTitle from "../../Hook/useTitle";

const Cinema = () => {
  const param = useParams();

  const cinema = getMovieByType(param.type);

  useTitle(
    `[Tuyển tập]  ${cinema[0].type.label}, Phim bộ hay nhất 2021 | SS Phim`
  );

  if (cinema.length == 0) return <h1>404 Error</h1>;

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h1 className="section-title">{cinema[0].type.label}</h1>
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
