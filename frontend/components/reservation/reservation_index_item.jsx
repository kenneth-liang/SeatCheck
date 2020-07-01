import React from 'react';

import {Link} from 'react-router-dom'


class ReservationIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteReservation = this.deleteReservation.bind(this);

  }

  // componentDidMount(){
  //   Promise.all([
  //     // this.props.fetchRestaurants(),
  //     this.props.fetchReservation(this.props.reservation.id)
  //   ])
  // }

  deleteReservation(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteReservation(id);
    };
  }

  render() {
    if (!(this.props.restaurants[this.props.reservation.restaurant_id])) return null;
    // if (!this.props.reservation) return null;
    // if (!this.props.restaurants) return null;
    // debugger
    
    return (
      <div className="reservation-index-item">
        <img className="img" src={this.props.restaurants[this.props.reservation.restaurant_id].photoURL}/>
        <Link to={`/restaurants/${this.props.reservation.restaurant_id}`}>
          {this.props.reservation.restaurant.name}
        </Link>
        <h1>Date: {this.props.reservation.date}</h1>
        <h1>Time: {this.props.reservation.time}</h1>
        <h1>Table for {this.props.reservation.party}</h1>
        <button
          type="button"
          onClick={this.deleteReservation(this.props.reservation.id)}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default ReservationIndexItem;