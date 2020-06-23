import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const _nullErrors = { errors: [] };

const sessionErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
};

export default sessionErrorsReducer;
