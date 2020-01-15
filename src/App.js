import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./components/Student.js";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/students">
            <Home />
          </Route>
          <Route path="/dashboard"></Route>
          <Route path="/student/">
            <Student />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
