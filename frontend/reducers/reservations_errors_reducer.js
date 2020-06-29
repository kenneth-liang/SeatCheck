import {
    RECEIVE_RESERVATION_ERRORS
} from '../actions/reservation_actions';


const _nullErrors = { errors: [] };

const reservationErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default reservationErrorsReducer