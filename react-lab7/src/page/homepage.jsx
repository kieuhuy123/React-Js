import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default ({ products }) => {
  return (
    <div className="product-list">
      <Row>
        {products.map(({ id, title, image, price }) => {
          return (
            <Col key={id} lg={3}>
              <div className="product">
                <Link to={`/product/${id}`}>
                  <div className="product-thumnail">
                    <img src={image}></img>
                  </div>
                  <h2 className="product-title">{title}</h2>
                  <p className="product-price">{price}</p>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
