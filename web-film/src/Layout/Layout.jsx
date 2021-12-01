import { Outlet } from "react-router";
// import { Container } from "react-bootstrap";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Navbarf from "../Components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbarf/>
      <header>Day la header</header>

      <Outlet></Outlet>

      <footer>day la footer</footer>
    </>
  );
};

export default Layout;
