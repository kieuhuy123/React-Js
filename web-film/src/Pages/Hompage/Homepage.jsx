import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../../Components/Search";
import FilmList from "../../Components/FilmList";
import NewFilmList from "../../Components/NewItemList";
import useTitle from "../../Hook/useTitle";
import "./Home.css";
function Home() {
  useTitle("SS Phim | Xem phim mới | Phim Online | Full HD - Vietsub");
  const film = useSelector((state) => state);

  return (
    <Container>
      <Search />
      <Row>
        <Col lg="9">
          <div className="section-title-wrapper">
            <h1 className="section-title">Phim mới</h1>
          </div>
          <div className="tabs">
            <div className="tabs-menu">
              <Link to="/" className="tab-button tab-link active">
                Tất cả phim
              </Link>
              <Link to="/" className="tab-button tab-link">
                Sắp chiếu
              </Link>
              <Link to="/" className="tab-button tab-link">
                Phim mới
              </Link>
            </div>
            <div className="tabs-content">
              <FilmList film={film} />
            </div>
          </div>
        </Col>

        <Col lg="3" className="sidebar">
          <div className="sidenav-block-title">Phim bộ hot</div>

          <div className="div-block">
            <NewFilmList film={film} />
          </div>

          <div className="sidenav-block-title">Phim lẻ hot</div>

          <div className="div-block">
            <NewFilmList film={film} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
