import { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "../../Components/Search";
import { getFlims } from "../../db/NewFilm";
const SearchFilm = () => {
  const film = getFlims();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <div className="section-title-wrapper">
        <h1 className="section-title">Tìm phim</h1>
      </div>

      <form className="search-box">
        <input
          type="search"
          className="search-input"
          placeholder="Ban muon tim  phim gi"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button className="search-button">Tìm kiếm</button>
      </form>

      <div className="search-list">
        {film
          // eslint-disable-next-line array-callback-return
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