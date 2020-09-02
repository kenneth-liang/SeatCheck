import {connect} from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { deleteRating, fetchRestaurantRatings, } from "../../actions/rating_actions";
import { createFavorite, deleteFavorite, requestUserFavorites } from "../../actions/favorite_actions"
import { fetchUserReservations } from "../../actions/reservation_actions"
import RestaurantShow from './restaurant_show'


const mSTP = (state, ownProps) => {
    return {
      favorites: Object.values(state.entities.favorites),
      // restaurants: Object.values(state.entities.restaurants),
      restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
      currentUser: state.session.id,
      reservations: state.entities.reservations
    }
}

const mDTP = dispatch => {
    return {
      fetchRestaurants: () => dispatch(fetchRestaurants()),
      fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
      deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
      fetchRestaurantRatings: (restaurantId) => dispatch(fetchRestaurantRatings(restaurantId)),
      createFavorite: favorite => dispatch(createFavorite(favorite)),
      deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
      requestUserFavorites: userId => dispatch(requestUserFavorites(userId)),
      fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),

    };
}

export default connect(mSTP,mDTP)(RestaurantShow)