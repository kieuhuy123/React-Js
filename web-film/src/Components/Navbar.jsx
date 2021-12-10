import { Link, NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
const Navbarf = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileClick = () => setClick(!click);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="//i0.wp.com/i.imgur.com/GvLWtFD.png"
              className="logo"
              alt=""
            />
          </Link>
        </Navbar.Brand>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <NavLink to="the-loai/phim-bo" onClick={closeMobileClick}>
              Phim bộ
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Navbarf;
