import * as ApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const DESTROY_FAVORITE = 'DESTROY_FAVORITE';
export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS';

export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
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

export const createFavorite = favorite => dispatch => (
  ApiUtil.createFavorite(favorite)
    .then((newFavorite) => {
      dispatch(receiveFavorite(newFavorite));
    }, err => (dispatch(receiveFavoriteErrors(err.responseJSON))))
);


export const fetchFavorite = (favoriteId) => dispatch => (
  ApiUtil.fetchFavorite(favoriteId)
    .then(payload => {
      dispatch(receiveFavorite(payload)),
        err => dispatch(receiveFavoriteErrors(err.responseJSON))
    })
);

export const requestUserFavorites = userId => dispatch => (
  ApiUtil.fetchFavorites(userId)
    .then(favorites => dispatch(receiveFavorites(favorites)),
      err => dispatch(receiveFavoriteErrors(err.responseJSON)))
);




export const deleteFavorite = id => dispatch => (
  ApiUtil.deleteFavorite(id)
    .then(favorite => dispatch(removeFavorite(favorite)),
      err => dispatch(receiveFavoriteErrors(err.responseJSON))
    )
);
