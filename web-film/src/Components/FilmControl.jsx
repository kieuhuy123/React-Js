import React from "react";
import { BsXLg } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//
import "./FilmControl.css";
import { useDispatch } from "react-redux";
import {
  removeFilmFromWatchlist,
  addFilmToWatched,
  removeFilmFromWatched,
  moveToWatchlist,
} from "../redux/actions/watchlist";
export const FilmControl = ({ film, type }) => {
  const dispath = useDispatch();
  return (
    <div className="item-control">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => dispath(addFilmToWatched(film))}
          >
            <AiOutlineEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => dispath(removeFilmFromWatchlist(film.id))}
          >
            <BsXLg />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => dispath(moveToWatchlist(film))}
          >
            <AiOutlineEyeInvisible />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => dispath(removeFilmFromWatched(film.id))}
          >
            <BsXLg />
          </button>
        </>
      )}
    </div>
  );
};
