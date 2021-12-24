import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const Slide3 = ({listFilm}) => {
  const settings = {
    dots: true,
    infinite: false,

    // arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: "dots-pagination slick-dots",
    customPaging: (i) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "-10px",
          opacity: "0",
        }}
      >
        {i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

 

  return (
    <>
      <Slider {...settings}>
        {listFilm.map((f) => (
          <div className="movie-item" key={f.id}>
            <Link to={"/film/" + f.alias}>
              <img src={f.image} alt="" />
            </Link>

            <div className="movie-item-content">
              <div className="movie-item-title">{f.title}</div>
              <div className="movie-infos">
                <div className="movie-info">
                  <AiFillStar />
                  <span>{f.rate}</span>
                </div>
                <div className="movie-info">
                  <BiTimeFive />
                  <span>{f.info.time}</span>
                </div>
                <div className="movie-info">
                  <span>HD</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slide3;
