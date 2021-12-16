import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import black from "./black-banner.png";
import wanda from "./wanda-banner.jpg";
import transformer from "./transformer-banner.jpg";
import { FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Slide2 from "./Slide2";
import "./Slide.css";
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
            <img src={black} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">Black Panther</div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>9.5</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>120 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi cum eveniet aliquid quo molestiae mollitia nulla commodi
                  amet nostrum nihil, doloribus facere numquam iure consectetur.
                  Reprehenderit nobis incidunt unde labore!
                </div>
                <div className="item-action top-down delay-6">
                  <Link to="#" className="btn btn-hover">
                    <FaPlay />
                    <span>Watch now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide-item">
            <img src={wanda} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">Wanda vision</div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>9.5</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>120 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi cum eveniet aliquid quo molestiae mollitia nulla commodi
                  amet nostrum nihil, doloribus facere numquam iure consectetur.
                  Reprehenderit nobis incidunt unde labore!
                </div>
                <div className="item-action top-down delay-6">
                  <Link to="#" className="btn btn-hover">
                    {/* <i className="bx bxs-right-arrow"></i> */}
                    <span>Watch now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide-item">
            <img src={transformer} alt="" />
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title top-down">Tranformer</div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <AiFillStar />
                    <span>9.5</span>
                  </div>
                  <div className="movie-info">
                    <BiTimeFive />
                    <span>120 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi cum eveniet aliquid quo molestiae mollitia nulla commodi
                  amet nostrum nihil, doloribus facere numquam iure consectetur.
                  Reprehenderit nobis incidunt unde labore!
                </div>
                <div className="item-action top-down delay-6">
                  <Link to="#" className="btn btn-hover">
                    {/* <i className="bx bxs-right-arrow"></i> */}
                    <span>Watch now</span>
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
