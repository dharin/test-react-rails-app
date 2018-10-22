import React, { Component } from "react";
import SearchBar from "./searchbar";
import $ from "jquery";

class Arrival extends Component {
  state = {
    initialArrival: [],
    arrival_header: [
      "Arrival Time",
      "Arriving from",
      "Airline",
      "Flight Number"
    ],
    arrival_tab: false,
    disabled: true
  };

  fetchArrivalData = dateVal => {
    $.ajax({
      type: "GET",
      url: `http://localhost:3001/arrivals?date=${dateVal}`,
      dataType: "JSON"
    })
      .done(data => {
        this.setState({
          initialArrival: data,
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
    this.setState({ arrival_tab: true });
    this.fetchArrivalData(this.handleDate());
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          initialData={this.state.initialArrival}
          disabled={this.state.disabled}
          fetchFlightData={this.fetchArrivalData}
          header={this.state.arrival_header}
          arrival_active={this.state.arrival_tab}
        />
      </div>
    );
  }
}

export default Arrival;
