import {connect} from "react-redux";
import HomePage from './home'
import { asArray } from "../../reducers/selectors";
import {
  fetchRestaurants,
  fetchRestaurant,
  searchRestaurants,
} from "../../actions/restaurant_actions";


const mSTP = state => {
    return {
      restaurants: asArray(state.entities),
    };
}

const mDTP = dispatch => {
    return {
      fetchRestaurants: () => dispatch(fetchRestaurants()),
      fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
      searchRestaurants: search => dispatch(searchRestaurants(search))
    };
}

export default connect(mSTP,mDTP)(HomePage)