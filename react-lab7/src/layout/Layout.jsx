import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Container>
      <Row>
        <Col xs>
          <header className="header">
            <ul className="menu">
              <li className="menu-item">
                <Link to="/">Homepage</Link>
              </li>
              <li className="menu-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </header>
        </Col>
      </Row>

      <Row>
        <Col lg={3}>Sidebar</Col>

        <Col lg={9}>{props.children}</Col>
      </Row>
    </Container>
  );
};
