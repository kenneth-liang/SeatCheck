import * as ApiUtil from '../util/favorite_api_util';


export const RECEIVE_ALL_FAVORITE = 'RECEIVE_ALL_FAVORITE';
export const RECEIVE_SINGLE_FAVORITE = 'RECEIVE_SINGLE_FAVORITE';
export const DESTROY_FAVORITE = 'DESTROY_FAVORITE';

export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS';


export const receiveAllFavorite = (favorites) => ({
  type: RECEIVE_ALL_FAVORITE,
  favorites
});

export const receiveSingleFavorite = (favorite) => ({
  type: RECEIVE_SINGLE_FAVORITE,
  favorite,
});

export const removeFavorite = (favoriteId) => ({
  type: DESTROY_FAVORITE,
  favoriteId
});


export const receiveFavoriteErrors = (errors) => ({
  type: RECEIVE_FAVORITE_ERRORS,
  errors
});


export const createFavorite = favorite => dispatch => {
  return ApiUtil.createFavorite(favorite).then(
    (newFavorite) => dispatch(receiveSingleFavorite(newFavorite)),
    (err) => dispatch(receiveFavoriteErrors(err.responseJSON))
  )
};

export const requestSingleFavorite = id => dispatch => {
  return ApiUtil.fetchSingleFavorite(id).then(
    (favorite) => {
      dispatch(receiveSingleFavorite(favorite));
      return favorite;
    })
};

export const requestUserFavorites = userId => dispatch => {
  return ApiUtil.fetchUserFavorites(userId).then(
    (favorites) => dispatch(receiveAllFavorite(favorites)),
    (err) => dispatch(receiveFavoriteErrors(err.responseJSON))
  )
};

export const deleteFavorite = id => dispatch => {
  return ApiUtil.deleteFavorite(id).then(
    (favorite) => dispatch(removeFavorite(favorite)),
    (err) => dispatch(receiveFavoriteErrors(err.responseJSON))
  )
};