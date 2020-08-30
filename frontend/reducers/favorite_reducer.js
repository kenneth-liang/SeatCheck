import {
  RECEIVE_ALL_FAVORITE,
  RECEIVE_SINGLE_FAVORITE,
  DESTROY_FAVORITE,
} from '../actions/favorite_actions';


const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_FAVORITE:
      return action.favorites;
    case DESTROY_FAVORITE:
      delete nextState[action.favoriteId]
      return nextState;
    case RECEIVE_SINGLE_FAVORITE:
      nextState[action.favorite.id] = action.favorite
      return nextState
    default:
      return state;
  }
}

export default favoritesReducer;