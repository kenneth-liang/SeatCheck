import {
  RECEIVE_FAVORITE,
  RECEIVE_FAVORITE_ERRORS,
} from '../actions/favorite_actions';


const favoriteErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITE:
      return []
    case RECEIVE_FAVORITE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default favoriteErrorsReducer;