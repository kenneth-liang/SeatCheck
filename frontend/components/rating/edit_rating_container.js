import {connect} from "react-redux"
import  {updateRating} from "../../actions/rating_actions"
import {fetchRestaurant} from '../../actions/restaurant_actions'
import {fetchRating} from '../../actions/rating_actions'

import EditRatingForm from "./edit_rating"

const mSTP = (state, ownProps) => {
    return {
      rating: state.entities.ratings[ownProps.match.params.ratingId], 
      currentUser: state.entities.users[state.session.id],
      restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    };
}

const mDTP = dispatch => {
  return {
    updateRating: ratingId => dispatch(updateRating(ratingId)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchRating: ratingId => dispatch(fetchRating(ratingId))
  }
}

export default connect(mSTP, mDTP)(EditRatingForm)