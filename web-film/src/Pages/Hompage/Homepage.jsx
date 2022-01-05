import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { getFilms } from "../../db/NewFilm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// Components
import FilmList from "../../Components/FilmList";
import NewFilmList from "../../Components/NewItemList";
import useTitle from "../../Hook/useTitle";
import { Pagination } from "../../Components/Pagination";
import Slide from "../../Components/Slide/Slide";
import { loadFilmAsync } from "../../redux/actions/filmlist";
// Css
import "./Home.css";

function Home() {
  const { films, loading } = useSelector((state) => state.film);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmAsync());
  }, [dispatch]);

  useTitle("CE FILM | Xem phim mới | Phim Online | Full HD - Vietsub");

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  //

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirtPost = indexOfLastPost - postPerPage;
  const currentPosts = films.slice(indexOfFirtPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <h1>Loading...</h1>;
  if (films.length === 0) return <h1>404 Error</h1>;
  return (
    <>
      <Slide />

      <Container>
        <Row>
          <Col lg="12" xl="9">
            <div className="section-title-wrapper">
              <h2 className="section-title">Phim mới</h2>
            </div>
            <div className="tabs">
              <div className="tabs-content">
                <FilmList film={currentPosts} />
              </div>
            </div>
          </Col>

          <Col xl="3" className="sidebar">
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
          totalPosts={films.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}

export default Home;
