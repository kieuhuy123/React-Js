import { Outlet } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Navbarf from "../Components/Navbar/Navbar";
import Footer from ".././Pages/Footer/Footer";
import ScrollToTop from "../Hook/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbarf />

      <Outlet></Outlet>

      <Footer />
    </>
  );
};

export default Layout;
