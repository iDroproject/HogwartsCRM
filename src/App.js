import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./components/Student.js";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/students">
            <Home />
          </Route>
          <Route exact path="/student/">
            <Student />
          </Route>
          <Route path="/student/:ID/edit_student">
            <EditStudent/>
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
