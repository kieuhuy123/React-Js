import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { IoAddSharp, IoCheckmarkSharp } from "react-icons/io5";
import { ImFilm } from "react-icons/im";
import {
  addFilmToWatched,
  addFilmToWatchlist,
} from "../../redux/actions/watchlist";
import "./BtnDropDown.css";

const BtnDropDown = ({ film }) => {
  const dispatch = useDispatch();
  const { watched, watchlist } = useSelector((state) => state.watchlist);
  let storedFilm = watchlist.find((p) => p.id === film.id);
  let storeWatchedFilm = watched.find((p) => p.id === film.id);

  const watchlistDisable = storedFilm ? true : storeWatchedFilm ? true : false;

  const watchedDisable = storeWatchedFilm ? true : false;
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <ImFilm />
          Bộ sưu tập
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <button
              className="collection w-button "
              disabled={watchlistDisable}
              onClick={() => dispatch(addFilmToWatchlist(film))}
            >
              {watchlistDisable ? (
                <IoCheckmarkSharp style={{ color: "#fff" }} />
              ) : (
                <IoAddSharp style={{ color: "#fff" }} />
              )}
              Phim muốn xem
            </button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <button
              className="collection w-button "
              disabled={watchedDisable}
              onClick={() => dispatch(addFilmToWatched(film))}
            >
              {watchedDisable ? (
                <IoCheckmarkSharp style={{ color: "#fff" }} />
              ) : (
                <IoAddSharp style={{ color: "#fff" }} />
              )}
              Phim đã xem
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default BtnDropDown;
