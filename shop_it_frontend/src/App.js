import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from './components/test'
import Navbar from './components/NavBar'
function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
