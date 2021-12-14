import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import { Link } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
// import { Button, Comment, Form, Header } from "semantic-ui-react";
import "./PlayFilm.css";
import "video-react/dist/video-react.css";

import { getMovieByAlias } from "../../db/NewFilm";

const PlayFilm = () => {
  const param = useParams();

  const movie = getMovieByAlias(param.alias);
  console.log(movie);
  // Error
  if (!movie) return <h1>404 Error</h1>;

  return (
    <Container>
      <Player
        width="500px"
        playsInline
        poster={movie.image}
        src={movie.video}
        className="video-container"
      >
        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar autoHide={false}>
          <ReplayControl seconds={10} order={2.2} />
          <ForwardControl seconds={10} order={3.2} />
        </ControlBar>
      </Player>

      <Row className="align-items-center">
        <Col lg="8" className="play-title">
          <h2>{movie.title}</h2>
        </Col>
        <Col lg="4" className="cloumn-right">
          <div className="back">
            <IoReturnDownBackOutline />
            <Link to={"/film/" + movie.alias} className="sub-title">
              Về trang giới thiệu phim
            </Link>
          </div>
        </Col>
      </Row>
      <div
        class="fb-like"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-width=""
        data-layout="standard"
        data-action="like"
        data-size="large"
        data-share="true"
      ></div>
      <div className="comment-header">
        <h4 className="comment-title">Bình luận về phim: </h4>
        <img
          src="//i0.wp.com/i.imgur.com/GvLWtFD.png"
          loading="lazy"
          alt="film hay ne!"
        ></img>
      </div>
      <div className="comment-wrapper">
        <div
          className="fb-comments"
          data-href="https://www.facebook.com/ourbelovedsummervnfp"
          data-width="750"
          data-numposts="5"
        ></div>
      </div>
    </Container>
  );
};

export default PlayFilm;
