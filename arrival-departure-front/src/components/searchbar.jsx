import React, { Component } from "react";
import Flight from "./flight";
import FlightData from "./flightdata";

class SearchBar extends Component {
  state = {
    flightData: this.props.initialData,
    fromToInput: "",
    flightNumber: "",
    airline: "",
    timeInput: ""
  };

  handleFilter = event => {
    var targetName = event.target.name;
    var targetValue = event.target.value;
    this.handleStateChange(targetName, targetValue);
  };

  handleStateChange = (targetName, targetValue) => {
    if (targetName === "formToInput") {
      this.setState({ fromToInput: targetValue }, () => {
        this.handleFilterData();
      });
    }
    if (targetName === "flightNumber") {
      this.setState({ flightNumber: targetValue }, () => {
        this.handleFilterData();
      });
    }
    if (targetName === "airline") {
      this.setState({ airline: targetValue }, () => {
        this.handleFilterData();
      });
    }
    if (targetName === "timeInput") {
      this.setState({ timeInput: targetValue }, () => {
        this.handleFilterData();
      });
    }
    if (targetName === "dateInput") {
      this.props.fetchFlightData(targetValue);
    }
  };

  handleFilterData = () => {
    var updatedList = this.props.initialData;
    var stateTemp = this.state;
    updatedList = updatedList.filter(function(flight) {
      if (
        stateTemp.fromToInput !== "" &&
        flight.airline_info
          .toLowerCase()
          .search(stateTemp.fromToInput.toLowerCase()) === -1
      ) {
        return false;
      }
      if (
        stateTemp.flightNumber !== "" &&
        flight.flight_number
          .toLowerCase()
          .search(stateTemp.flightNumber.toLowerCase()) === -1
      ) {
        return false;
      }
      if (
        stateTemp.airline !== "" &&
        flight.airline_company
          .toLowerCase()
          .search(stateTemp.airline.toLowerCase()) === -1
      ) {
        return false;
      }
      if (
        stateTemp.timeInput !== "" &&
        flight.time.toLowerCase().search(stateTemp.timeInput.toLowerCase()) ===
          -1
      ) {
        return false;
      }
      return true;
    });
    this.setState({ flightData: updatedList });
  };

  componentWillReceiveProps(props) {
    this.setState({ flightData: props.initialData });
  }

  render() {
    return (
      <div>
        <Flight
          departure_active={this.props.departure_active}
          arrival_active={this.props.arrival_active}
        />
        <form>
          <div className="row col-md-12 mt-2">
            <div className="form-group col-md-3">
              <input
                type="date"
                name="dateInput"
                disabled={this.props.disabled ? "disabled" : ""}
                className="form-control"
                onChange={this.handleFilter}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="time"
                name="timeInput"
                disabled={this.props.disabled ? "disabled" : ""}
                className="form-control"
                onChange={this.handleFilter}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                name="formToInput"
                disabled={this.props.disabled ? "disabled" : ""}
                placeholder={
                  this._reactInternalFiber._debugOwner.stateNode.props.match
                    .path === "/departure"
                    ? "To"
                    : "From"
                }
                className="form-control"
                onChange={this.handleFilter}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                name="flightNumber"
                disabled={this.props.disabled ? "disabled" : ""}
                placeholder="Flight number"
                className="form-control"
                onChange={this.handleFilter}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                name="airline"
                disabled={this.props.disabled ? "disabled" : ""}
                placeholder="Airline"
                className="form-control"
                onChange={this.handleFilter}
              />
            </div>
          </div>
        </form>
        <FlightData
          flightData={this.state.flightData}
          header={this.props.header}
        />
      </div>
    );
  }
}

export default SearchBar;
