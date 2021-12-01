import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";
const Navbarf = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
            <Link to="/">Phim moi</Link>

            <Link to="cinema">Phim chieu rap</Link>

            <Link to="series">Phim bo</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
   
  );
};

export default Navbarf;
