import {
    RECEIVE_RATING,
    RECEIVE_RATINGS,
    UPDATE_RATING,
    REMOVE_RATING
} from '../actions/rating_actions'

const ratingsReducer = (state = {}, action) =>  {
    Object.freeze(state);

    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RATING:
            nextState[action.rating.id] = action.rating;
            return nextState;
        case RECEIVE_RATINGS:
            return action.ratings;
        case REMOVE_RATING:
            delete nextState[action.ratingId];
            return nextState;
        case UPDATE_RATING:
            nextState[action.rating.id] = action.rating;
            return nextState;
        default:
            return state;
    }

}

export default ratingsReducer;