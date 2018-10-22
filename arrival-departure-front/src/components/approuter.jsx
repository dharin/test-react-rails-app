import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Departure from "./departure";
import Arrival from "./arrival";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Departure} />
        <Route path="/arrival" component={Arrival} />
      </div>
    </Router>
  );
};
