import {connect} from "react-redux";
import HomePage from './home'
import { asArray } from "../../reducers/selectors";
import {
  fetchRestaurants,
  fetchRestaurant,
} from "../../actions/restaurant_actions";

const mSTP = state => {
    return {
      restaurants: asArray(state.entities),
    };
}

const mDTP = dispatch => {
    return {
      fetchRestaurants: () => dispatch(fetchRestaurants()),
    };
}

export default connect(mSTP,mDTP)(HomePage)