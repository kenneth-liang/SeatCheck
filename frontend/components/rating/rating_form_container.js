import {connect} from 'react-redux';

import {
  createRating,
  receiveRatingErrors,
} from "../../actions/rating_actions";



import RatingForm from './rating_form';

const mSTP = (state, ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id],
      errors: state.errors.rating,
    };
}

const mDTP = dispatch => {
    return {
      createRating: (rating) => dispatch(createRating(rating)),
      clearErrors: () => dispatch(receiveRatingErrors([])),
    };
}

export default connect(mSTP, mDTP)(RatingForm);