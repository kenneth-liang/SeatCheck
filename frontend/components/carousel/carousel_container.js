import { connect } from "react-redux";
import { searchRestaurants } from "../../actions/restaurant_actions";

import Carousel from "./carousel";

const mDTP = (dispatch) => {
  return {
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
  };
};

export default connect(null, mDTP)(Carousel);
