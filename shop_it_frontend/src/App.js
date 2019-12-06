import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingListPage from "./components/ShoppingListPage";
import Store from "./components/Store";
import Register from "./components/Register";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchPage from "./components/SearchPage";
import Test from "./components/test";

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App container-fluid">
        <Router>
          <br />
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Nav.Item>
              <Link to="/shop_it_django">
                <Navbar.Brand href="/">Shop It</Navbar.Brand>
              </Link>
            </Nav.Item>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto collapse-links" bg="dark" variant="dark">
                <Nav.Link className="nav-link" to="/shopping_list">
                  Shopping List
                </Nav.Link>
                <Link className="nav-link" to="/stores">
                  Stores
                </Link>
                <Link className="nav-link" to="/search">
                  Suggestions
                </Link>
              </Nav>
              <Nav>
                <Nav.Item>
                  <Register />
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
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
            <Route exact path="/test">
              <Test />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
