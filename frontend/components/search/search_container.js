import {connect} from 'react-redux'
import {asArray} from '../../reducers/selectors'

import {
  fetchRestaurants,
  fetchRestaurant,
  searchRestaurants,
} from "../../actions/restaurant_actions";

import Search from './search'

const mSTP = state => {
  // not needed 
  // debugger
    return {
      restaurants: asArray(state.entities),
    };
}

const mDTP = (dispatch) => {
  // debugger
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    searchRestaurants: search => dispatch(searchRestaurants(search))
  };
};


export default connect(null,mDTP)(Search)