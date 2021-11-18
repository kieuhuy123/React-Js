import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <Container>
      <Row>
        <Col xs>
          <ul className="menu">
          
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
              <Link to="/detail">Product</Link>
              </li>
         
          </ul>  
        </Col>
      </Row>
      <Row>
      <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};
