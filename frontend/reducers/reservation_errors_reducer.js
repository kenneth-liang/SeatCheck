import {
    RECEIVE_RESERVATION_ERRORS
} from '../actions/reservation_actions';


const reservationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default reservationErrorsReducer