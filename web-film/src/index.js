import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
//  CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Them cac Route
import Layout from "./Layout/Layout";
import Home from "./Pages/Hompage/Homepage";
import Cinema from "./Pages/Cinema/Cinema";
import DetailFilm from "./Pages/DetailFilm/DetailFilm";
import GenreFilm from "./Pages/GenreFilm/GenreFilm.jsx";
import PlayFilm from "./Pages/PlayFilm/PlayFilm.jsx";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="category/:genre" element={<GenreFilm />}></Route>
            <Route path="the-loai/:type" element={<Cinema />}></Route>
            <Route path="film/:alias" element={<DetailFilm />}></Route>
            <Route path="play/:alias" element={<PlayFilm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
