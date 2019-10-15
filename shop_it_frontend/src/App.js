import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingListPage from "./components/ShoppingListPage.js";
import Store from "./components/Store";
import Register from "./components/Register";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container fluid={true} className="App container">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/shop_it_django/">Home</Link>
            </li>
            <li>
              <Link to="/shoppingList">Shopping Lists</Link>
            </li>
            {/* if admin */}
            <li>
              <Link to="/stores">Stores</Link>
            </li>
            <li>
              <Register />
            </li>
          </ul>
        </div>
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
