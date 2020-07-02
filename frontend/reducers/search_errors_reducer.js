import {RECEIVE_SEARCH_ERRORS, RECEIVE_RESTAURANTS} from '../actions/restaurant_actions';

const _nullErrors = { errors: [] };

const searchErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state)
    switch (action.type) {
      case RECEIVE_SEARCH_ERRORS:
        return Object.assign({}, state, action.errors);
    case RECEIVE_RESTAURANTS:
        return _nullErrors;
      default:
        return state;
    }
}

export default searchErrorsReducer;