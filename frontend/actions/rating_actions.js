import * as ApiUtil from "../util/rating_api_util";


export const RECEIVE_RATING = "RECEIVE_RATING";
export const RECEIVE_RATINGS = "RECEIVE_RATINGS";
export const UPDATE_RATING = "UPDATE_RATING";
export const REMOVE_RATING = "REMOVE_RATING";
export const RECEIVE_RATING_ERRORS = "RECEIVE_RATING_ERRORS";

export const receiveRating = (rating) => ({
    type: RECEIVE_RATING,
    rating
});

export const receiveRatings = (ratings) => ({
    type: RECEIVE_RATINGS,
    ratings
});

export const updateRating = rating => ({
    type: UPDATE_RATING,
    rating
})

export const removeRating = ratingId => ({
    type: REMOVE_RATING,
    ratingId
})


export const receiveRatingErrors = errors => {
    return {
      type: RECEIVE_RATING_ERRORS,
      errors
    };
}

export const createRating = rating => dispatch => {
    return ApiUtil.createRating(rating).then(
      (newRating) => dispatch(receiveRating(newRating)),
      (err) => dispatch(receiveRatingErrors(err.responseJSON))
    );
}

export const fetchRating = ratingId => dispatch => {
    return ApiUtil.fetchRating(ratingId).then(
      (payload) => dispatch(receiveRating(payload)),
      (err) => dispatch(receiveRatingErrors(err.responseJSON))
    );
}

export const fetchRestaurantRatings = restaurantId => dispatch => {
    return ApiUtil.fetchRestaurantRatings(restaurantId).then(
      (ratings) => dispatch(receiveRatings(ratings)),
      (err) => dispatch(receiveRatingErrors(err.responseJSON))
    );
}

export const editRating = rating => dispatch => {
    return ApiUtil.updateRating(rating).then(
      (updatedRating) => dispatch(updateRating(updatedRating)),
      (err) => dispatch(receiveRatingErrors(err.responseJSON))
    );
}

export const deleteRating = id => dispatch => {
    return ApiUtil.deleteRating(id).then(
      (rating) => dispatch(removeRating(rating.id)),
      (err) => dispatch(receiveRatingErrors(err.responseJSON))
    );
}