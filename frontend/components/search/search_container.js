import {connect} from 'react-redux'
import {asArray} from '../../reducers/selectors'
import {
  fetchRestaurants,
  fetchRestaurant,
} from "../../actions/restaurant_actions";
import Search from './search'

const mSTP = state => {
    return {
      restaurants: asArray(state.entities),
    };
}

const mDTP = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    // fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

  };
};


export default connect(mSTP,mDTP)(Search)