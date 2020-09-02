import React from 'react';
import ReservationIndexItem from './reservation_index_item'

class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reservations">
        { (this.props.reservations.length === 0)? (
          <p className="no-res">No Reservations Upcoming</p>
        ) : (
          <div>
            {this.props.reservations.map((reservation) => {
                return (
                    <ReservationIndexItem
                        key={reservation.id}
                        reservation={reservation}
                        deleteReservation={this.props.deleteReservation}
                        restaurants={this.props.restaurants}
                        fetchRestaurants={this.props.fetchRestaurants}
                        fetchReservation={this.props.fetchReservation}
                    />
                )
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ReservationIndex

