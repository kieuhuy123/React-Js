import { Row, Col } from "react-bootstrap";
import FilmItem from "./FilmItem";
import "./FilmList.css";
const FilmList = ({ film }) => {
  return (
    <div className="item-list-wrapper">
      <Row className="item-list">
        {film.map((m) => (
          <Col lg="3" key={m.id} className="item">
            <FilmItem film={m}></FilmItem>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilmList;
