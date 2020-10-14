import {connect} from 'react-redux';

import {
  createRating,
  receiveRatingErrors,
  fetchRestaurantRatings
} from "../../actions/rating_actions";


import RatingForm from './rating_form';

const mSTP = (state) => {
    return {
      currentUser: state.entities.users[state.session.id],
      errors: state.errors.rating,
      formType: 'create'
    };
}

const mDTP = dispatch => {
    return {
      action: (rating) => dispatch(createRating(rating)),
      createRating: (rating) => dispatch(createRating(rating)),
      clearErrors: () => dispatch(receiveRatingErrors([])),
      fetchRestaurantRatings: (ratings) => dispatch(fetchRestaurantRatings(ratings)),
    };
}

export default connect(mSTP, mDTP)(RatingForm);