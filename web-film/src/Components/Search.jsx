
import "./Search.css";
const Search = () => {
  return (
    <form action="/search" className="search-box">
      <input type="search" className="search-input" placeholder="Ban muon tim  phim gi" />
      <button className="search-button">Tìm kiếm</button>
    </form>
  );
};

export default Search;
