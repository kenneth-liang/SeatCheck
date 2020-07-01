import {connect} from 'react-redux'

import {
  fetchRestaurants,
  fetchRestaurant} from "../../actions/restaurant_actions";
import RestaurantIndex from './restaurant_index'


const mSTP = state => {
    return {
        currentUser: state.currentUser,
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
      fetchRestaurants: () => dispatch(fetchRestaurants()),
      fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
      fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),
    };
}

export default connect(mSTP,mDTP)(RestaurantIndex)

