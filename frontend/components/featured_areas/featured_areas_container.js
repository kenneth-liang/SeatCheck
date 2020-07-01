import {connect} from 'react-redux';
import {searchRestaurants} from '../../actions/restaurant_actions'

import FeaturedAreas from './featured_areas'

const mDTP = dispatch => {
    return {
        searchRestaurants: (search) => dispatch(searchRestaurants(search))
    }
}

export default connect(null,mDTP)(FeaturedAreas)