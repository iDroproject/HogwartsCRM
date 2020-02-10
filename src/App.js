import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./components/Student.js";
import EditStudent from "./components/EditStudent";
import NewStudent from "./components/NewStudent";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/students">
            <Home />
          </Route>
          <Route path="/new_student" component={NewStudent}/>
          <Route exact path="/student/">
            <Student />
          </Route>
          <Route path='/edit_student/:id' component={EditStudent}/>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
