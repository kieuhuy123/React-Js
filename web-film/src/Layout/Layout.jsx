import { Outlet } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Navbarf from "../Components/Navbar";
import Search from "../Components/Search";
import Footer from ".././Pages/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Navbarf />
      <Search />

      <Outlet></Outlet>

      <Footer />
    </>
  );
};

export default Layout;
