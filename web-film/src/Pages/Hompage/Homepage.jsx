import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//

import FilmList from "../../Components/FilmList";
import "./Home.css";
function Home() {
  const film = useSelector((state) => state);

  return (
    <Container>
      {/* <Search /> */}
      <Row>
        <Col lg="9">
          <div className="section-title-wrapper">
            <h1 className="section-title">Phim mới</h1>
          </div>
          <div className="tabs">
            <div className="tabs-menu">
              <a href="/" className="tab-button tab-link active">
                Tat ca phim{" "}
              </a>
              <a href="/" className="tab-button tab-link">
                Sap chieu{" "}
              </a>
              <a href="/" className="tab-button tab-link">
                Phim moi{" "}
              </a>
            </div>
            <div className="tabs-content">
              <FilmList film={film} />
            </div>
          </div>
        </Col>

        <Col lg="3" className="sidebar">
          <div className="sidenav-block-title">Phim bộ hot</div>

          <div className="div-block">
            <div className="new-item-list">
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>

              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>

              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>

              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>

              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>

              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="sidenav-block-title">Phim lẻ hot</div>

          <div className="div-block">
            <div className="new-item-list">
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
              <div className="new-item">
                <div className="new-item-block">
                  <Link
                    to="/"
                    className="small-item-block-img"
                    style={{
                      backgroundImage:
                        "url(https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a8ccb05c52e0e13f3910ef_poster-thanh-pho-nhan-tao-2021.jpg)",
                    }}
                  >
                    <div className="item-number small">8,7</div>
                  </Link>
                  <a
                    href="/phim/thanh-pho-nhan-tao-artificial-city-2021"
                    className="item-block-title in-nav w-inline-block"
                  >
                    <div className="item-block-title in-nav">
                      Thành Phố Nhân Tạo (Soo Ae) - Artificial City (2021)
                    </div>
                  </a>
                  <img
                    src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 129.1999969482422px, 23vw"
                    srcSet="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-500.png 500w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao-p-800.png 800w, //static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png 964w"
                    className="info-block-icon stars"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
