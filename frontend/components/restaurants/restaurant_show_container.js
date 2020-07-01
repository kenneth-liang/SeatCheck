import {connect} from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'

// debugger
const mSTP = (state, ownProps) => {
    // debugger
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
    };
}

export default connect(mSTP,mDTP)(RestaurantShow)