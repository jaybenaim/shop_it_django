import React from "react";
import "./App.css";
import Home from "./shop_it_frontend/src/components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingListPage from "./shop_it_frontend/src/components/ShoppingListPage.js";
import Store from "./shop_it_frontend/src/components/Store";
import SearchPage from "./shop_it_frontend/src/components/SearchPage";
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
            <Link to="search"> Suggestions </Link>
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
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
