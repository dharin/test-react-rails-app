import React, { Component } from "react";
import "./flight.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import { Link } from "react-router-dom";

class Flight extends Component {
  state = {};
  render() {
    return (
      <ul className="nav nav-tabs justify-content-center nav-item-link">
        <li className="nav-item">
          <Link
            className={
              "nav-link" + (this.props.departure_active ? " active" : "")
            }
            to="/"
          >
            Departure
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              "nav-link" + (this.props.arrival_active ? " active" : "")
            }
            to="/arrival"
          >
            Arrival
          </Link>
        </li>
      </ul>
    );
  }
}

export default Flight;
