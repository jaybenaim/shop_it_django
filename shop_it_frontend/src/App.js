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
        <Nav className="justify-content-center navbar" activeKey="home">
          <Nav.Item>
            <Nav.Link href="/shop_it_django/" eventKey="home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/shoppingList" eventKey="link-1">
              Shopping List
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Stores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Register />
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/shop_it_django/">
            <Home />
          </Route>
          <Route path="/shoppingList">
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
