import * as ApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS"; 

export const receiveAllRestaurants = restaurants => {
    return {
      type: RECEIVE_RESTAURANTS,
      restaurants,
    };
}

export const receiveRestaurant = payload => {
    return {
      type: RECEIVE_RESTAURANT,
      payload
    };
}

export const recieveSearchErrors = errors => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors,
  };
}

export const fetchRestaurants = () => dispatch => {
    return ApiUtil.fetchRestaurants().then(
        (restaurants) => dispatch(receiveAllRestaurants(restaurants)))
}

export const fetchRestaurant = id => dispatch => {
    return ApiUtil.fetchRestaurant(id).then(
        (payload) => dispatch(receiveRestaurant(payload)))
}


// dispatching an action to trigger a change in our view component
export const searchRestaurants = search => dispatch => {
  return ApiUtil.searchRestaurants(search).then(
    (searchedRestaurants) =>
    dispatch(receiveAllRestaurants(searchedRestaurants)),
    (errors) => dispatch(recieveSearchErrors(errors.responseJSON))
  );
}