import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FilmList from "../../Components/FilmList";
import "./Watchlist.css";
const Watchlist = () => {
  const { watchlist, watched } = useSelector((state) => state);
  console.log(watchlist);

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-title-wrapper">
            <h2 className="section-title">Phim muốn xem</h2>
            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movie"}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className="tabs">
              <div className="tabs-content">
                <FilmList film={watchlist} type="watchlist" />
              </div>
            </div>
          ) : (
            <h3 style={{ color: "#9cabb6" }}>Chưa thêm vào bộ sưu tập</h3>
          )}
          <div className="section-title-wrapper">
            <h2 className="section-title">Phim đã xem</h2>
            <span className="count-pill">
              {watched.length} {watchlist.length === 1 ? "Movie" : "Movie"}
            </span>
          </div>
          {watched.length > 0 ? (
            <div className="tabs">
              <div className="tabs-content">
                <FilmList film={watched} type="watchlist" />
              </div>
            </div>
          ) : (
            <h3 style={{ color: "#9cabb6" }}>Chưa thêm vào bộ sưu tập</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Watchlist;
