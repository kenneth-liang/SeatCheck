import {connect} from 'react-redux';

import ReservationIndex from './reservation_index';

import fetchUserReservations from '../../actions/reservation_actions';

const mSTP = state => {
    return {
      currentUser: state.session.currentUser,
      reservations: Object.values(state.entities.reservations),
    };
}

const mDTP = dispatch => {
  return {
    fetchUserReservations: () => dispatch(fetchUserReservations()),
  };
}

export default connect(mSTP,mDTP)(ReservationIndex)