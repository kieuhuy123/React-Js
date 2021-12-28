import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getFilms } from "../../db/NewFilm";
// Components
import FilmList from "../../Components/FilmList";
import NewFilmList from "../../Components/NewItemList";
import useTitle from "../../Hook/useTitle";
import { Pagination } from "../../Components/Pagination";
import Slide from "../../Components/Slide/Slide";

// Css
import "./Home.css";

function Home() {
  useTitle("CE FILM | Xem phim mới | Phim Online | Full HD - Vietsub");

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  //

  const film = getFilms();

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirtPost = indexOfLastPost - postPerPage;
  const currentPosts = film.slice(indexOfFirtPost, indexOfLastPost);

  console.log(film);
  console.log(currentPosts);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Slide />

      <Container>
        <Row>
          <Col lg="9">
            <div className="section-title-wrapper">
              <h2 className="section-title">Phim mới</h2>
            </div>
            <div className="tabs">
              {/* <div className="tabs-menu">
                <Link to="/" className="tab-button tab-link active">
                  Tất cả phim
                </Link>
                <Link to="/" className="tab-button tab-link">
                  Sắp chiếu
                </Link>
                <Link to="/" className="tab-button tab-link">
                  Phim mới
                </Link>
              </div> */}
              <div className="tabs-content">
                <FilmList film={currentPosts} />
              </div>
            </div>
          </Col>

          <Col lg="3" className="sidebar">
            <div className="sidenav-block-title sub-title">Phim bộ hot</div>

            <div className="div-block">
              <NewFilmList film={currentPosts} />
            </div>

            <div className="sidenav-block-title sub-title">Phim lẻ hot</div>

            <div className="div-block">
              <NewFilmList film={currentPosts} />
            </div>
          </Col>
        </Row>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={film.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}

export default Home;
