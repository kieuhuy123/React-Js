import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
//  CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Them cac Route
import Layout from "./Layout/Layout";
import Home from "./Pages/Hompage/Homepage";
import Cinema from "./Pages/TypeFilm/Typefilm";
import DetailFilm from "./Pages/DetailFilm/DetailFilm";
import GenreFilm from "./Pages/GenreFilm/GenreFilm.jsx";
import PlayFilm from "./Pages/PlayFilm/PlayFilm.jsx";
import SearchFilm from "./Pages/SearchFilm/SearchFilm.jsx";
import Watchlist from "./Pages/Watchlist/Watchlist.jsx";
import "./server";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="category/:genre" element={<GenreFilm />}></Route>
            <Route path="the-loai/:type" element={<Cinema />}></Route>
            <Route path="film/:alias" element={<DetailFilm />}></Route>
            <Route path="play/:alias" element={<PlayFilm />}></Route>
            <Route path="search" element={<SearchFilm />}></Route>
            <Route path="watchlist" element={<Watchlist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
