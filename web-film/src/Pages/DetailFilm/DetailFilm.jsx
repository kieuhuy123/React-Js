import { useParams } from "react-router-dom";
import { getMovieByAlias } from "../../db/NewFilm";
import { Container, Row, Col } from "react-bootstrap";
import "./DetailFilm.css";
import "../../Components/FilmList.css";

const Film = () => {
  const params = useParams();
  console.log(params);

  const movie = getMovieByAlias(params.alias);
  console.log(movie);
  if (!movie) return <p>404 Page Not Found</p>;

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col lg="4">
            <img src={movie.image} alt="" />
          </Col>
          <Col lg="8">
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
                <p className="info-title-link">{"Phim " + movie.genre}</p>
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
              <div className="button_trailer w-button">Trailer</div>
              <div className="button_xemphim w-button">Xem phim</div>
            </div>
            <div className="header-short-description">
              <p>
                Thoi luong 60 phut <br /> So tap: 16 <br /> Nam san xuat: 2021{" "}
                <br />
                Ngay phat song: 17/11 <br /> Quoc gia: Han Quoc <br /> The loai:
                Hanh dong <br />
                Dien vien: Lalalisa
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="section review-section">
        <Container>
          <div className="review-wrapper" id="review">
            <div className="rtb">
              <p>
                <strong>
                  Biệt Đội Siêu Anh Hùng 4&nbsp;: Hồi kết ( Avengers : Endgame )
                </strong>{" "}
                là bộ phim siêu anh hùng của Mỹ được ra mắt vào năm 2019, được
                sản xuất bởi Marvel Studios và Walt Disney Studios Motion
                Picture phát hành. Phim là phần thứ 4 trong loạt phim Avengers,
                và cũng là phần phim thứ 22 thuộc vũ trụ điện ảnh Marvel, đồng
                thời cùng là phim áp chót của giai đoạn 3 trong loạt series siêu
                anh hùng.&nbsp;
              </p>
              <p>
                Anh em nhà Russo quay trở lại ghế đạo diễn, với biên kịch được
                chắp bút bởi Christopher Markus và Stephen McFeely. Các nhân vật
                trong phim được lấy theo nhân vật gốc trong Biệt đội Avenger
                trong truyện tranh Marvel. Tựa đề phim Avengers : Endgame chính
                thức được công bố vào ngày 7 tháng 12 năm 2018. Trong phim, các
                thành viên còn sống sót ở phần phim trước và các đồng minh cùng
                hợp tác để đảo ngược thiệt hại do Thanos gây ra, đồng thời diệt
                trừ hắn một lần và mãi mãi.
              </p>
              <p>
                Trên trang tổng hợp kết quả đánh giá Rotten Tomatoes, Avengers :
                Endgame giữ tỷ lệ đánh giá tích cực là 94% dựa trên 451 bài đánh
                giá, với tỷ lệ trung bình 8.3/10. Kết quả khác cũng cho thấy 88%
                người thích xem phim này dựa vào 31,351 lượt đánh giá cho ra tỷ
                lệ 4.5/5. Các chuyên gia của trang web nhận định&nbsp; “Thú vị,
                giải trí và tác động nhiều về mặt cảm xúc là những gì mà
                Avengers&nbsp; : Endgame đã làm được, tạo nên một kết thúc
                Infinity Saga tuyệt vời của Marvel”. Trên trang Metacritic, phim
                được đánh giá 78/100 điểm dựa trên 56 nhà phê bình với những
                đánh giá hầu như tích cực. CinemaScore cũng đã cho phim điểm A+
                hiếm hoi dựa trên ý kiến của khán giả, đây cũng là bộ phim thứ 3
                của Marvel nhận được điểm số này.
                <br />
              </p>
            </div>
            <div className="trailer-video-block" id="trailer">
              <div className="trailer-title">Official trailer:</div>
              <div
                className="review-video w-video"
                style={{ paddingTop: "56.20608899297424%" }}
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F5VYb3B1ETlk%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5VYb3B1ETlk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5VYb3B1ETlk%2Fhqdefault.jpg&amp;key=c4e54deccf4d4ec997a64902e9a30300&amp;type=text%2Fhtml&amp;schema=youtube"
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

export default Film;
