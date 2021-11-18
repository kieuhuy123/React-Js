import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";

export default ({ products }) => {
  
  const { productId } = useParams();
  const { image, title, description, price, category } = products.find(
    (p) => p.id == productId
  );
  return (
    <Row>
      
      <Col lg={3}>
        <h2 >{ category}</h2>
        <img src={image}></img>
      </Col>
      
      <Col lg={9}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        
      </Col>
    </Row>
  );
};
