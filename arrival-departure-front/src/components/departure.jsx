import React, { Component } from "react";
import SearchBar from "./searchbar";
import $ from "jquery";

class Departure extends Component {
  state = {
    initialDeparture: [],
    departure_header: [
      "departure Time",
      "Destination",
      "Airline",
      "Flight Number"
    ],
    departure_tab: false,
    disabled: true
  };

  fetchDepartureData = dateVal => {
    $.ajax({
      type: "GET",
      url: `http://localhost:3001/departures?date=${dateVal}`,
      dataType: "JSON"
    })
      .done(data => {
        this.setState({
          initialDeparture: data,
          disabled: false
        });
      })
      .fail(data => {
        console.log("error");
      });
  };

  handleDate = () => {
    let month =
      new Date().getMonth() + 1 < 10
        ? "0" + new Date().getMonth()
        : new Date().getMonth() + 1;
    let day =
      new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate();
    return new Date().getFullYear() + "-" + month + "-" + day;
  };

  componentDidMount() {
    this.setState({ departure_tab: true });
    this.fetchDepartureData(this.handleDate());
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          initialData={this.state.initialDeparture}
          disabled={this.state.disabled}
          fetchFlightData={this.fetchDepartureData}
          header={this.state.departure_header}
          departure_active={this.state.departure_tab}
        />
      </div>
    );
  }
}

export default Departure;
