import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
} from "../actions/restaurant_actions";


const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_RESTAURANTS:
        return action.restaurants;
      case RECEIVE_RESTAURANT:
        nextState[action.payload.restaurant.id] = action.payload.restaurant;
        return nextState;
      default:
        return state;
    }
}

export default restaurantsReducer;