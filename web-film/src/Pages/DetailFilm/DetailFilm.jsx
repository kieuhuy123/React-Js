import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtnDropDown from "../../Components/BtnDropDown/BtnDropDown";
// Action

import { loadFilmAsync } from "../../redux/actions/filmlist";

// Css
import { BsFillTagsFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import "./DetailFilm.css";
import "../../Components/FilmList.css";

const DetailFilm = () => {
  const { loading, films } = useSelector((state) => state.film);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadFilm() {
      if (films.length === 0) {
        await dispatch(loadFilmAsync());
      }
    }

    loadFilm();
  }, [dispatch, films.length]);

  const filmAlias = films.find((p) => p.alias === params.alias);

  // TODO: Set title, loading, error
  if (!filmAlias) {
    document.title = "Error";
  } else {
    document.title = `${filmAlias.title} | Xem phim`;
  }

  if (loading) return <h1>Loading...</h1>;
  if (!filmAlias) return <h1>404 Error</h1>;

  return (
    <>
      <div
        className="background-page-header"
        style={{
          backgroundImage: `url(${filmAlias.image})`,
        }}
      >
        <div className="background-overlay">
          <Container>
            <Row>
              <Col md="4">
                <div className="header-thumnail-img">
                  <img src={filmAlias.image} alt="" />
                </div>
              </Col>
              <Col md="7" className="header-info">
                <h1 className="header-title">{filmAlias.title}</h1>
                <div className="info-wrapper on-review-page">
                  <div className="info-block">
                    <BsFillTagsFill className="info-block-icon" />
                    <Link
                      to={"/category/" + filmAlias.genre.url}
                      className="info-title-link"
                    >
                      {filmAlias.genre.label}
                    </Link>
                  </div>
                  <div className="info-block">
                    <BiTimeFive className="info-block-icon" />
                    <div className="info-title">16/12/2021</div>
                  </div>
                </div>

                <div className="header-button">
                  <a href="#trailer" className="button_trailer w-button">
                    Trailer
                  </a>
                  <Link
                    to={"/play/" + filmAlias.alias}
                    className="button_xemphim w-button"
                    // onClick={window.XMLHttpRequestUpload}
                  >
                    Xem phim
                  </Link>
                  <BtnDropDown film={filmAlias} />
                </div>

                <div className="header-short-description">
                  <p>
                    {"Thời lượng: " + filmAlias.info.time}
                    <br />
                    {"Số tập: " + filmAlias.info.episode}
                    <br />
                    {"Năm xuất bản: " + filmAlias.info.Publishing}
                    <br />
                    {"Diễn viên: " + filmAlias.info.actors}
                    <br />
                    {"Đạo diễn: " + filmAlias.info.directors}
                    <br />
                    {"Quốc gia: " + filmAlias.info.nation}
                    <br />
                    {"Thể loại: " + filmAlias.info.genre}
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
              <h2 className="trailer-title">{filmAlias.review.title}</h2>
              <p>{filmAlias.review.t1}</p>
              <img src={filmAlias.review.img} alt="" />
              <p>{filmAlias.review.t2}</p>
              <p>{filmAlias.review.t3}</p>
              <p>{filmAlias.review.t4}</p>
            </div>
            <div className="trailer-video-block" id="trailer">
              <h2 className="trailer-title">Official trailer:</h2>
              <div
                className="review-video w-video"
                style={{ paddingTop: "56.20608899297424%" }}
              >
                <iframe
                  className="embedly-embed"
                  src={filmAlias.review.video}
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
