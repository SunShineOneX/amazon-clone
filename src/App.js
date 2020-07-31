import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <h1>HOME PAGE!!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
