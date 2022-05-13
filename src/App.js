import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
