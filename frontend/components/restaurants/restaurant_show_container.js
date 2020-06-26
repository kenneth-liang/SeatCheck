import {connect} from 'react-redux';
import { fetchRestaurant } from '../../util/restaurant_api_util';
import RestaurantShow from './restaurant_show'


const mSTP = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
    }
}

export default connect(mSTP,mDTP)(RestaurantShow)