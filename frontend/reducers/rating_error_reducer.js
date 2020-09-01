import {
    RECEIVE_RATING,
    RECEIVE_RATINGS,
    RECEIVE_RATING_ERRORS
} from '../actions/rating_actions'

const ratingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RATING:
            return []
        case RECEIVE_RATING_ERRORS:
            return action.errors;
        case RECEIVE_RATINGS:
        default:
            return state;
    }
}

export default ratingErrorsReducer;