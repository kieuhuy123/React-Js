import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// components
import FilmList from "../../Components/FilmList";
// actions
import useTitle from "../../Hook/useTitle";
import { loadFilmAsync } from "../../redux/actions/filmlist";

import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist, watched } = useSelector((state) => state.watchlist);
  const { films, loading } = useSelector((state) => state.film);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmAsync());
  }, [dispatch]);
  useTitle("Bộ sưu tập");
  if(loading) return <h1>Loading...</h1>
  if (films.length === 0) return <h1>Error</h1>;
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
            <div className="tabs watchlist-tab">
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
            <div className="tabs watchlist-tab">
              <div className="tabs-content">
                <FilmList film={watched} type="watched" />
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
