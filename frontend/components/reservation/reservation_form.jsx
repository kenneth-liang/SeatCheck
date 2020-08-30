import React from "react"
import {withRouter} from 'react-router-dom'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: this.props.match.params.restaurantId,
      user_id: "",
      party: 1,
      date: "",
      time: "14:00",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.seatsBuilder = this.seatsBuilder.bind(this);
    this.timePickerBuilder = this.timePickerBuilder.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      this.state.userId = this.props.currentUser.id;
    }

    let resInfo = {
      restaurant_id: this.state.restaurant_id,
      user_id: this.state.userId,
      party: this.state.party,
      date: this.state.date,
      time: this.state.time,
    };

    this.props.createReservation(resInfo)
    this.props.clearErrors();
    // this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  seatsBuilder () { 
    let numPeople = [] 
    for (let i = 1; i < 11; i++){
      numPeople.push(i);
    }
    let numList = numPeople.map(num => (
      <option key={num} value={num}>
        {num === 1 ? num + " seat" : num + " seats"}
      </option>
    ));
    return numList;
  }

  timePickerBuilder() {
    
    let timeArr = [];
    let openTime = this.props.restaurants[this.state.restaurant_id ].open_time;
    openTime = parseInt(openTime.split("T")[1].split(":")[0]);
    let closeTime = this.props.restaurants[this.state.restaurant_id].close_time;
    closeTime = parseInt(closeTime.split("T")[1].split(":")[0]);
    for (let i = openTime; i < closeTime; i++) {
      timeArr.push(i);
    }

    let selectTime = timeArr.map(time => (
      <option key={time} value={time}>
        {" "}
        {time < 10 ? "0" + time + ":00" : time + ":00"}
      </option>
    ));

    return selectTime;
  }


  render() {
    
    let date = new Date();
    let minDate = date.toISOString().slice(0, 10);
    return (
      <div className="reservation-box">
        <h3 id="res-h3">Make a reservation</h3>
        
        {this.renderErrors()}
        <form>
          <select className="res-input seat" onChange={this.update("party")}>
            {this.seatsBuilder()}
          </select>

          <select className="res-input time-date" onChange={this.update("time")}>
            {this.timePickerBuilder()}
          </select>

          <input
            type="date"
            min={minDate}
            value={this.state.date}
            placeholder="YYYY-MM-DD"
            onChange={this.update("date")}
            className="res-input time-date"
          />

          {this.props.currentUser ? (
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Find a Table"
              className="res-button"
            />
          ) : (
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Find a Table"
              disabled="disabled"
              className="res-button"
              id="disabled-btn"
            />
          )}

          {this.props.currentUser ? (
            <p className="offer">
              <i className="fas fa-chart-line"></i> Booked{" "}
              {parseInt(this.state.restaurant_id.slice(0, 1)) * 2 + 45} times
              today.
            </p>
          ) : (
            <p id="rese-log">Log in to reserve a seat!</p>
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(ReservationForm);