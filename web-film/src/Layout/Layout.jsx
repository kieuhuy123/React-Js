import { Outlet } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Navbarf from "../Components/Navbar";

import Footer from ".././Pages/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Navbarf />
     

      <Outlet></Outlet>

      <Footer />
    </>
  );
};

export default Layout;
