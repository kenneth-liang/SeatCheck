import {connect} from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import {
  deleteRating,
  fetchRestaurantRatings,
} from "../../actions/rating_actions";
import RestaurantShow from './restaurant_show'

const mSTP = (state, ownProps) => {
    return {
        // restaurants: Object.values(state.entities.restaurants),
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return {
      fetchRestaurants: () => dispatch(fetchRestaurants()),
      fetchRestaurant: (restaurantId) =>
        dispatch(fetchRestaurant(restaurantId)),
      deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
      fetchRestaurantRatings: (restaurantId) =>
        dispatch(fetchRestaurantRatings(restaurantId)),
        
    };
}

export default connect(mSTP,mDTP)(RestaurantShow)