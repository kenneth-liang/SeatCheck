import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE,
  DESTROY_FAVORITE,
} from '../actions/favorite_actions';


const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      nextState[action.favorite.id] = action.favorite
      return nextState      
    case DESTROY_FAVORITE:
      delete nextState[action.favoriteId.id];
      return nextState;
    default:
      return state;
  }
};

export default FavoritesReducer;