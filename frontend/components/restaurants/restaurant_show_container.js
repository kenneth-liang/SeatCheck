import {connect} from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'


const mSTP = (state, ownProps) => {
    // debugger
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
    }
}

export default connect(mSTP,mDTP)(RestaurantShow)