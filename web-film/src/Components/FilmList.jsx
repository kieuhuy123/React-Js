import { Row, Col } from "react-bootstrap";
import FilmItem from "./FilmItem";
import "./FilmList.css";
const FilmList = ({ film, type }) => {
  return (
    <div className="item-list-wrapper">
      <Row className="item-list">
        {film.map((m) => (
          <Col xs="6" lg="3" key={m.id} className="item">
            <FilmItem film={m} type={type}></FilmItem>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilmList;
