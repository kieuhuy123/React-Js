import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Search.css";
import "../FilmList.css";
import BtnDropDown from "../BtnDropDown/BtnDropDown";
const Search = ({ val }) => {
  return (
    <Row>
      <Col xs="3">
        <Link
          className="search-img"
          style={{ background: `url(${val.image})` }}
          to={"/film/" + val.alias}
        >
          <div className="item-number">{val.rate}</div>
        </Link>
      </Col>
      <Col xs="9">
        <Link to={"/film/" + val.alias} className="search-title">
          {val.title}
        </Link>
        <span className="search-info">
          {"Thời lượng: " + val.info.time + "; "}
        </span>
        <span className="search-info">{"Diễn viên: " + val.info.actors}</span>

        <BtnDropDown film={val} />
      </Col>
    </Row>
  );
};

export default Search;
