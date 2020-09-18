import { connect } from "react-redux";
import { fetchRestaurants, searchRestaurants } from "../../actions/restaurant_actions";
import MapSearch from "./map_search";

const mSTP = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  }
}

const nDTP = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
  }
};

export default connect(mSTP, nDTP)(MapSearch);
