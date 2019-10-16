import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingListPage from "./components/ShoppingListPage.js";
import Store from "./components/Store";
import Register from "./components/Register";
import { Container, Nav } from "react-bootstrap";
function App() {
  return (
    <Container fluid={true} className="App container">
      <Router>
        <Nav className="justify-content-center navbar">
          <Nav.Item>
            <Link to="/shop_it_django">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="shopping_list"> Shopping List</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="stores"> Stores </Link>
          </Nav.Item>
          <Nav.Item>
            <Register />
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/shop_it_django/">
            <Home />
          </Route>
          <Route path="/shopping_list">
            <ShoppingListPage />
          </Route>
          {/*  if admin  */}
          <Route exact path="/stores">
            <Store />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
