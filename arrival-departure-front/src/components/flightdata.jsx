import React, { Component } from "react";

class FlightData extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            {this.props.header.map(header => (
              <th key={header}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.flightData.map(flight_data => (
            <tr key={flight_data.flight_number}>
              <td>{flight_data.time}</td>
              <td>{flight_data.airline_info}</td>
              <td>{flight_data.airline_company}</td>
              <td>{flight_data.flight_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FlightData;
