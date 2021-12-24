import { Row, Col } from "react-bootstrap";
import FilmItem from "./FilmItem";
import "./FilmList.css";
const FilmList = ({ film, type }) => {
  return (
    <div className="item-list-wrapper">
      <Row className="item-list">
        {film.map((m) => (
          <Col lg="3" xs="6" key={m.id} className="item">
            <FilmItem film={m} type={type}></FilmItem>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilmList;
