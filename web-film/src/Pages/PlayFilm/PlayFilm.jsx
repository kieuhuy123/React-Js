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
        <Col md="9" className="play-title">
          {movie.title}
        </Col>
        <Col md="3" className="cloumn-right">
          <div className="back">
            <IoReturnDownBackOutline />
            <Link to={"/film/" + movie.alias}>Ve trang gioi thieu phim</Link>
          </div>
        </Col>
      </Row>

      {/* <div className="comment-wrapper">
        <div className="comment-title">Bình luận về phim</div>

        <div
          className="fb-comments"
          data-href="https://www.facebook.com/hunghaihuocc"
          data-width="800"
          data-numposts="1"
        ></div>
      </div> */}
      {/* <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group> */}
    </Container>
  );
};

export default PlayFilm;
