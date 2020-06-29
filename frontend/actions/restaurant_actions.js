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

// errors handled in form
// if nothing is returned displays custom error message 
// export const recieveSearchErrors = errors => {
//   return {
//     type: RECEIVE_SEARCH_ERRORS,
//     errors,
//   };
// }

export const fetchRestaurants = () => dispatch => {
    return ApiUtil.fetchRestaurants().then(
        (restaurants) => dispatch(receiveAllRestaurants(restaurants)))
}

export const fetchRestaurant = id => dispatch => {
    return ApiUtil.fetchRestaurant(id).then(
        (payload) => dispatch(receiveRestaurant(payload)))
}

export const searchRestaurants = search => dispatch => {
  return ApiUtil.searchRestaurants(search).then(
    (searchedRestaurants) =>
    dispatch(receiveAllRestaurants(searchedRestaurants))
    // (errors) => dispatch(recieveSearchErrors(errors.responseJSON))
  );
}