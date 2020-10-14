import {connect} from 'react-redux';

import {
  createRating,
  receiveRatingErrors,
  fetchRestaurantRatings
} from "../../actions/rating_actions";

import {fetchRestaurant} from '../../actions/restaurant_actions'

import RatingForm from './rating_form';

const mSTP = (state, ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id],
      restaurant: state.entities.restaurants[ownProps.match.params.id],
      errors: state.errors.rating,
      formType: 'Submit Rating'
    };
}

const mDTP = dispatch => {
    return {
      action: (rating) => dispatch(createRating(rating)),
      createRating: (rating) => dispatch(createRating(rating)),
      clearErrors: () => dispatch(receiveRatingErrors([])),
      fetchRestaurantRatings: (ratings) => dispatch(fetchRestaurantRatings(ratings)),
      fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    };
}

export default connect(mSTP, mDTP)(RatingForm);