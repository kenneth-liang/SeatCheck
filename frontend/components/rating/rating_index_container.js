import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";

import {
    fetchRestaurantRatings, deleteRating
} from '../../actions/rating_actions';

import RatingIndex from './rating_index'

const mSTP = (state, ownProps) => {
  
    return {
      ratings: Object.values(state.entities.ratings),
      restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
      currentUser: state.entities.users[state.session.id],
    };
}

const mDTP = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      fetchRestaurantRatings: (ratings) => dispatch(fetchRestaurantRatings(ratings)),
      deleteRating: ratingId => dispatch(deleteRating(ratingId))
    };
}

export default connect(mSTP,mDTP)(RatingIndex)