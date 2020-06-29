import React from "react"

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

    this.handleSubmit = this.handleSubmit.bind(this)
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

    if (this.props.user) {
      this.state.customerId = this.props.user.id;
    }

    let resInfo = {
      restaurant_id: this.state.restaurant_id,
      user_id: this.state.customerId,
      party: this.state.party,
      date: this.state.date,
      time: this.state.time,
    };
    
    // debugger
    this.props.createReservation(resInfo).then(() => {
      this.props.clearErrors();
      this.props.history.push(`/users/${this.props.user.id}`);
    });
  }

  render() {

    return (
      <div className="reservation-box">
        <div className="res-header">
          <h3>
            <span>Make a reservation</span>
          </h3>
        </div>

        <form className="res-content">
          <div className="res-filters">
            <div className="party">
              <div className="party-header">Party Size</div>
              <select onChange={this.update("party")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="date-time">
              <div className="date">
                <div className="date-header">Date</div>
                <input
                  type="date"
                  value={this.state.date}
                  placeholder="YYYY-MM-DD"
                  onChange={this.update("date")}
                />
              </div>
              <div className="time">
                <div className="time-header">Time</div>
                <select onChange={this.update("time")}>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="res-search-button">
            {this.props.user ? (
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
                className="res-button"
                disabled="disabled"
                background="grey"
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default ReservationForm;