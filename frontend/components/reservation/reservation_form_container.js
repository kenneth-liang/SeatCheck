import {connect} from 'react-redux';

import {
  createReservation,
  receiveReservationErrors,
} from "../../actions/reservation_actions";

import ReservationForm from './reservation_form'

const mSTP = (state, ownProps)  => {
  return {
    currentUser: state.entities.users[state.session.id],
    restaurants: state.entities.restaurants,
    errors: state.errors.reservation,
    reservations: state.entities.reservations,
    restaurant: state.entities.restaurants[ownProps.currentRestaurant.id]
  };
}

const mDTP = dispatch => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    clearErrors: () => dispatch(receiveReservationErrors([])),
  };
}

export default connect(mSTP, mDTP)(ReservationForm);