import {connect} from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions'

import Filter from './filter'

const mSTP = state => {
  return {
    restaurants: state.entities.restaurants
  }
}

const mDTP = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(mSTP, mDTP)(Filter)