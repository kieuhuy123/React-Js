import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";

// Components
import NewFilmList from "../../Components/NewItemList";
import Slide3 from "../../Components/Slide/Slide3";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { ImFilm } from "react-icons/im";
import BtnDropDown from "../../Components/BtnDropDown/BtnDropDown";

// CSS
import "./PlayFilm.css";
import "video-react/dist/video-react.css";

// Actions
import { loadFilmAsync } from "../../redux/actions/filmlist";

const PlayFilm = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { films, loading } = useSelector((state) => state.film);
  // Get film
  useEffect(() => {
    async function loadFilm() {
      if (films.length === 0) {
        await dispatch(loadFilmAsync());
      }
    }

    loadFilm();
  }, [dispatch, films.length]);
  // Error

  const film = films.find((p) => p.alias === param.alias);
  // TODO: Set  loading, error
  if (loading) return <h1>Loading</h1>;
  if (!film) return <h1>404 Error</h1>;

  const typeFilm = films.filter((p) => p.type.url === film.type.url);

  const genreFilm = films.filter((p) => p.genre.url === film.genre.url);

  return (
    <>
      <Container>
        <Row>
          <Col md="9">
            <Player
              width="500px"
              playsInline
              poster={film.image}
              src={film.video}
              className="video-container"
            >
              <BigPlayButton position="center" />
              <LoadingSpinner />
              <ControlBar autoHide={false}>
                <ReplayControl seconds={10} order={2.2} />
                <ForwardControl seconds={10} order={3.2} />
              </ControlBar>
            </Player>

            <BtnDropDown film={film}></BtnDropDown>

            <Row className="align-items-center">
              <Col lg="8" className="play-title">
                <h2>{film.title}</h2>
              </Col>
              <Col lg="4" className="cloumn-right">
                <div className="back">
                  <IoReturnDownBackOutline />
                  <Link to={"/film/" + film.alias} className="sub-title">
                    Về trang giới thiệu phim
                  </Link>
                </div>
              </Col>
            </Row>

            <div
              className="fb-like"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-width=""
              data-layout="standard"
              data-action="like"
              data-size="large"
              data-share="true"
            ></div>

            <div className="comment-header">
              <h4 className="comment-title">Bình luận về phim: </h4>
              <Link to="/" className="logo">
                <ImFilm className="main-color" />
                CE F<span className="main-color">IL</span>M
              </Link>
            </div>

            <div className="comment-wrapper">
              <div
                className="fb-comments"
                data-href="https://www.facebook.com/ourbelovedsummervnfp"
                data-width="750"
                data-numposts="5"
              ></div>
            </div>
          </Col>

          <Col md="3" className="sidebar">
            <div className="sidenav-block-title sub-title">
              {film.type.label + " hot"}
            </div>

            <div className="div-block">
              <NewFilmList film={typeFilm} />
            </div>
          </Col>

          <div className="section">
            <div className="section-title-wrapper">
              <h2 className="section-title">Có thể bạn muốn xem</h2>
            </div>
            <div className="movies-slide">
              <Slide3 listFilm={genreFilm} />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default PlayFilm;
