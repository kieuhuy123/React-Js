import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { getMovieByType } from "../../db/NewFilm";
import FilmList from "../../Components/FilmList";
import useTitle from "../../Hook/useTitle";
const Cinema = () => {
  const param = useParams();

  const cinema = getMovieByType(param.type);

  if (cinema.length === 0) return <h1>404 Error</h1>;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useTitle(
    `[Tuyển tập]  ${cinema[0].type.label}, Phim bộ hay nhất 2021 | SS Phim`
  );

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h2 className="section-title">{cinema[0].type.label}</h2>
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
