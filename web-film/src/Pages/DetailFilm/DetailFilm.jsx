import { useParams } from "react-router-dom";
import { getMovieByAlias } from "../../db/NewFilm";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import useTitle from "../../Hook/useTitle";
import "./DetailFilm.css";
import "../../Components/FilmList.css";

const DetailFilm = () => {
  const params = useParams();
  console.log(params);

  const movie = getMovieByAlias(params.alias);
  console.log(movie);

  if (!movie) return <h1>404 Page Not Found</h1>;

  if (movie) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTitle(`${movie.title}`);
  }
  return (
    <>
      <div
        className="background-page-header"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <div className="background-overlay">
          <Container>
            <Row>
              <Col md="4">
                <div className="header-thumnail-img">
                  <img src={movie.image} alt="" />
                </div>
              </Col>
              <Col md="7" className="header-info">
                <h1 className="header-title">{movie.title}</h1>
                <div className="info-wrapper on-review-page">
                  <div className="info-block mobile-full">
                    <img
                      src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64997fa12231_5-sao.png"
                      alt=""
                      className="info-block-icon"
                    />
                  </div>
                  <div className="info-block">
                    <img
                      src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
                      className="info-block-icon"
                      alt=""
                    />
                    <Link to={"/category/" + movie.genre.url}className="info-title-link">{movie.genre.label}</Link>
                  </div>
                  <div className="info-block">
                    <img
                      src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647cf1a11d0b_clock.svg"
                      alt=""
                      className="info-block-icon"
                    />
                    <div className="info-title">3/12/2021</div>
                  </div>
                </div>

                <div className="header-button">
                  <a href="#trailer" className="button_trailer w-button">
                    Trailer
                  </a>
                  <Link
                    to={"/play/" + movie.alias}
                    className="button_xemphim w-button"
                  >
                    Xem phim
                  </Link>
                </div>
                <div className="header-short-description">
                  <p>
                    {"Thời lượng: " + movie.info.time}
                    <br />
                    {"Số tập: " + movie.info.episode}
                    <br />
                    {"Năm xuất bản: " + movie.info.Publishing}
                    <br />
                    {"Diễn viên: " + movie.info.actors}
                    <br />
                    {"Đạo diễn: " + movie.info.directors}
                    <br />
                    {"Quốc gia: " + movie.info.nation}
                    <br />
                    {"Thể loại: " + movie.info.genre}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="section review-section">
        <Container>
          <div className="review-wrapper" id="review">
            <div className="rtb">
              <div className="trailer-title">{movie.review.title}</div>
              <p>{movie.review.t1}</p>
              <img src={movie.review.img} alt="" />
              <p>{movie.review.t2}</p>
              <p>{movie.review.t3}</p>
              <p>{movie.review.t4}</p>
            </div>
            <div className="trailer-video-block" id="trailer">
              <div className="trailer-title">Official trailer:</div>
              <div
                className="review-video w-video"
                style={{ paddingTop: "56.20608899297424%" }}
              >
                <iframe
                  className="embedly-embed"
                  src={movie.review.video}
                  width="854"
                  height="480"
                  scrolling="no"
                  title="YouTube embed"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DetailFilm;
