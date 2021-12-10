import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  Player,
  BigPlayButton,
  PosterImage,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import "video-react/dist/video-react.css";
import "./PlayFilm.css";
import { getMovieByAlias } from "../../db/NewFilm";

const PlayFilm = () => {
  const param = useParams();

  const movie = getMovieByAlias(param.alias);
  console.log(movie);
  return (
    <Container>
      <Player
        playsInline
        poster={movie.image}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        className="video-container"
      >
        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar autoHide={false}>
          <ReplayControl seconds={10} order={2.2} />
          <ForwardControl seconds={10} order={3.2} />
        </ControlBar>
      </Player>
    </Container>
  );
};

export default PlayFilm;
