import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route,Link } from "react-router-dom";

import Home from "./page/homepage";
import About from "./page/aboutpage";
import Product from "./page/Product";
import Layout from "./layout/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prd) => {
        setProducts(prd);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //  useEffect(() => {
  //    fetch("/api/products")
  //      .then((res) => res.json())
  //      .then((products) => {
  //        console.log(products)
  //        setProducts(products);
  //        setLoading(false);
  //      })
  //      .catch((error) => {
  //        setError(error);
  //        setLoading(false);
  //      });
  //  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <p>Oops! Got error: </p>;
  }

  console.log(products);

  return (
    // <Container>
    //   <Row>
    //     <Col xs>
    //       <ul className="menu">
    //         <li className="menu-item">
    //           <Link to="/">Homepage</Link>
    //         </li>
    //         <li className="menu-item">
    //           <Link to="/about">About</Link>
    //         </li>
    //       </ul>
    //     </Col>
    //   </Row>

    //   <Switch>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/product/:productId">
    //       <Product products={products} />
    //     </Route>
    //     <Route path="/">
    //       <Home products={products}/>
    //     </Route>
    //   </Switch>
    // </Container>

    <Layout>
      <Switch>
        <Route path="/" exact >
          <Home products={products}></Home>
        </Route>

        <Route path="/about" >
          <About></About>
        </Route>

        <Route path="/product/:productId">
          <Product products={products}></Product>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
