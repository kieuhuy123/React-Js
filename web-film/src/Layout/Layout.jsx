import { Outlet, useParams } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Navbarf from "../Components/Navbar/Navbar";
import Footer from ".././Pages/Footer/Footer";
import ScrollToTop from "../Hook/ScrollToTop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilmAsync, addGenereAsync } from "../redux/actions/filmlist";

const Layout = () => {
  const { loading, films } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  const param = useParams();

  // useEffect(() => {
  //   if (!loading && films.length !== 0) {
  //     dispatch(loadFilmAsync());
  //   }
  // }, []);

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
