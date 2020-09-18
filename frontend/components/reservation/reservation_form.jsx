import React from "react"
import {withRouter, Link} from 'react-router-dom'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: this.props.match.params.restaurantId,
      user_id: "",
      party: "1",
      date: "",
      time: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.seatsBuilder = this.seatsBuilder.bind(this);
    this.timePickerBuilder = this.timePickerBuilder.bind(this);
    this.reservationCheck = this.reservationCheck.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul className="error-ul">
        {this.props.errors.map((error, i) => {
          if (error === "Time can't be blank") {
            return (
              <li key={`error-${i}`}>Please Select Time</li>
            )
          } else if (error === "Date can't be blank") {
            return <li key={`error-${i}`}>Please Select Date</li>;
          }
        }
        )}
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
    openTime = (parseInt(openTime.split("T")[1].split(":")[0])) ;
    let closeTime = this.props.restaurants[this.state.restaurant_id].close_time;
    closeTime = (parseInt(closeTime.split("T")[1].split(":")[0]));
    
    
    for (let i = openTime; i < closeTime; i++) {
      if (i === openTime) {
        timeArr.push(0);
        timeArr.push(i);
      } else {
        timeArr.push(i);
      }
    }
    let selectTime = timeArr.map(time => {
      if (time === 0) {
        return (
          <option value="" disabled selected>
            Select Time 
          </option>
        );
      } else {
        return (
          <option key={time} value={time}>
            {" "}
            {time < 10 ? "0" + time + ":00 pm" : (time - 12 ) + ":00 pm" }
          </option>
        )
        
      }
      }
    );
    return selectTime;
  }

  reservationCheck(){
    let currentRestaurant = this.props.restaurant
    let resArray = Object.values(this.props.reservations)

    for (let i = 0; i < resArray.length; i++){
      if (resArray[i].restaurant.id === currentRestaurant.id){
        return true
      }
    }
    return false    
  }

  render() {
    
    let date = new Date();
    let minDate = date.toISOString().slice(0, 10);
  
    let displayReserved = this.reservationCheck() ? (
      <div className="reserved-banner">
        <Link to={`/users/${this.props.currentUser.id}`} className="link-to-profile">
          <div className="reserved-bar">
            <div className="reserved-text">
              <i className="fas fa-calendar-check"></i>
              Seats Reserved!
            </div>
            <div className="reserved-text-off" >View All Reservations</div>
          </div>
        </Link>
        <br/>
       
      </div>
    ) :(
      ""
    )
    
    return (
      <div className="reservation-box">
        <div className="reserved">
          {displayReserved}
          {/* {this.reservationCheck()} */}
        </div>
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