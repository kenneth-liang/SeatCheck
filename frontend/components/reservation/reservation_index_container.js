import {connect} from 'react-redux';

import Reservationidnex from './reservation_index';

import fetchUserReservations from '../../actions/reservation_actions';

const mSTP = state => {
    return {
      user: state.entities.users[state.session.id],
    };
}