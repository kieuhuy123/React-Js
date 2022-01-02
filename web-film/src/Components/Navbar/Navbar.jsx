import { Link, NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ImFilm } from "react-icons/im";

//
import "./Navbar.css";
const Navbarf = () => {
  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  const closeMobileClick = () => setClick(!click);

  // Add

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            <ImFilm className="main-color" />
            CE F<span className="main-color">IL</span>M
          </Link>
        </Navbar.Brand>

        <div className="menu-icon" onClick={closeMobileClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="search" onClick={closeMobileClick}>
              <span style={{ display: "flex" }}>
                <BsSearch style={{ fontSize: "20px", marginRight: "5px" }} />{" "}
                Tìm kiếm
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <NavLink to="/" onClick={closeMobileClick}>
              Phim mới
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="the-loai/phim-chieu-rap" onClick={closeMobileClick}>
              Phim chiếu rạp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="the-loai/phim-hoat-hinh" onClick={closeMobileClick}>
              Phim hoạt hình
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="the-loai/phim-bo" onClick={closeMobileClick}>
              Phim bộ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="watchlist" onClick={closeMobileClick}>
              Bộ sưu tập
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Navbarf;
