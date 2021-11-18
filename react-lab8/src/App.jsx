import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch,BrowserRouter ,Route, Link } from "react-router-dom";
import Product from "./page/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Nav, Navbar, Container  } from "react-bootstrap";
import Home from "./page/Home";
import Todo from "./page/Todo"
function App() {
  return (
      <>
      <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/todo">Todo</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>


    <Switch>
        <Route path="/product">
         <Product/>
        </Route>
        <Route path="/todo">
          <Todo/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
    </Switch>
    </>
  );
}

export default App;
