import { Link, NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
// import { useState } from "react";
import "./Navbar.css";
const Navbarf = () => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/">Phim mới</NavLink>

          <NavLink to="the-loai/phim-chieu-rap">Phim chiếu rạp</NavLink>

          <NavLink to="the-loai/phim-bo">Phim bộ</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarf;
