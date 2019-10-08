import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingList from './components/ShoppingList.js'

function App() {
  return (
    <div className="App container">
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> 
              <Link to="/shoppingList">Create a shopping list</Link>
            </li>
          </ul>
        </div>
        <Switch>
        

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shoppingList">
            <ShoppingList /> 
          </Route>
        
        </Switch>
    </Router>
      </div>
  );
}

export default App;
