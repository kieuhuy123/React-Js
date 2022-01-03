import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Search from "../../Components/ItemSearch/Search";
import { loadFilmAsync } from "../../redux/actions/filmlist";

const SearchFilm = () => {
  const dispatch = useDispatch();
  const { films, loading } = useSelector((state) => state.film);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadFilm() {
      if (films.length === 0) {
        await dispatch(loadFilmAsync());
      }
    }

    loadFilm();
  }, [dispatch, films.length]);

  // Set title
  if (!films) {
    document.title = "Error";
  } else {
    document.title = "Tìm kiếm phim";
  }
  // Set loading and error

  if (loading) return <h1>Loading...</h1>;
  if (films.length === 0) return <h1>Error</h1>;

  return (
    <Container>
      <div className="section-title-wrapper">
        <h1 className="section-title">Tìm phim</h1>
      </div>

      <form className="search-box">
        <input
          type="search"
          className="search-input"
          placeholder="Bạn muốn tìm phim gì"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button className="search-button">Tìm kiếm</button>
      </form>

      <div className="search-list">
        {films
          .filter((val) => {
            if (searchTerm === "") {
              return "";
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => (
            <div className="search-item" key={key}>
              <Search val={val} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default SearchFilm;
