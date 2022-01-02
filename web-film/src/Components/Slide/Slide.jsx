import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Slide2 from "./Slide2";
import "./Slide.css";
import banner1 from "../../assets/banner/banner-1.webp";
import banner2 from "../../assets/banner/banner-2.webp";
import banner3 from "../../assets/banner/banner-3.webp";
const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-section">
      <div className="hero-slide">
        <Slider
          {...settings}
          className=" carousel-nav-center"
          id="hero-carousel"
        >
          <div className="hero-slide-item">
            <img src={banner1} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">One-piece</div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>9.3</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>23 phút</span>
                  </div>
                  <div className="movie-info">
                    <span>13+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Tác phẩm kể về Monkey D. Luffy, một chàng trai trẻ tuổi được
                  thần tượng thủa thơ ấu là Shanks tóc đỏ truyền cảm hứng để trở
                  thành một hải tặc thực thụ, bắt đầu ra khởi tại East Blue để
                  tìm kho báu gianh giá và trở thành Vua hải tặc.
                </div>
                <div className="item-action top-down delay-6">
                  <Link
                    to="/film/vua-hai-tac-one-piece"
                    className="btn btn-hover"
                  >
                    <FaPlay />
                    <span>Xem ngay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide-item">
            <img src={banner2} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">
                  Our beloved summer
                </div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>10</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>60 phút</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  "Chuyện phim Mùa Hè Yêu Dấu Của Chúng Ta bắt đầu từ một câu
                  nói của cặp đôi đang yêu nhau Choi Woong (Choi Woo-sik thủ
                  vai) và Gook Yeon Soo (Kim Da-mi đảm nhận) rằng: “Đó là một
                  khoảng thời gian tăm tối với bạn và chúng ta đừng bao giờ gặp
                  lại nhau nữa!”
                </div>
                <div className="item-action top-down delay-6">
                  <Link
                    to="/film/mua-he-yeu-dau-cua-chung-ta-our-beloved-summer-2021"
                    className="btn btn-hover"
                  >
                    <FaPlay />
                    <span>Xem ngay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide-item">
            <img src={banner3} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">The widow</div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>6.2</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>80 phút</span>
                  </div>
                  <div className="movie-info">
                    <span>18+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Mở đầu phim là bối cảnh hơn 300 người biến mất trong các khu
                  rừng xung quanh St.Petersburg mỗi năm. Một số được tìm thấy đã
                  chết trong trạng thái khỏa thân. Một số khác đã không còn được
                  tìm thấy. Điều này có liên quan đến các cuộc phỏng vấn với
                  người địa phương, khi họ nói rằng cảm thấy có gì đó ở trong
                  khu rừng, nơi mà họ gọi là The Lame Widow
                </div>
                <div className="item-action top-down delay-6">
                  <Link
                    to="/film/da-quy-rung-sau-the-widow-2020"
                    className="btn btn-hover"
                  >
                    <FaPlay />
                    <span>Xem ngay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="top-movies-slide">
        <Slide2 />
      </div>
    </div>
  );
};

export default Slide;
