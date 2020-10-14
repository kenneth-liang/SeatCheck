import {connect} from "react-redux"
import  {editRating} from "../../actions/rating_actions"
import {fetchRestaurant} from '../../actions/restaurant_actions'
import {fetchRating, receiveRatingErrors} from '../../actions/rating_actions'


import EditRatingForm from "./edit_rating"

const mSTP = (state, ownProps) => {
    return {
      rating: state.entities.ratings[ownProps.match.params.ratingId], 
      currentUser: state.entities.users[state.session.id],
      restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
      formType: "Edit Rating",
      restaurant: state.entities.restaurants[ownProps.match.params.id],
    };
}

const mDTP = dispatch => {
  return {
    action: rating => dispatch(editRating(rating)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchRating: ratingId => dispatch(fetchRating(ratingId)),
    clearErrors: () => dispatch(receiveRatingErrors([])),

  }
}

export default connect(mSTP, mDTP)(EditRatingForm)