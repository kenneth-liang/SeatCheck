import {connect} from 'react-redux'

import {fetchRestaurants} from '../../actions/restaurant_actions'
import RestaurantIndex from './restaurant_index'


const mSTP = state => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}

export default connect(mSTP,mDTP)(RestaurantIndex)