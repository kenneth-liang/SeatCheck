import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import UserProfile from './user'
import { fetchUserReservations, deleteReservation, } from "../../actions/reservation_actions";
import { requestUserFavorites, deleteFavorite } from '../../actions/favorite_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants,
    favorites: state.entities.favorites
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchRestaurants : () => dispatch(fetchRestaurants()),
    requestUserFavorites: userId => dispatch(requestUserFavorites(userId)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
  };
}

export default connect(mSTP,mDTP)(UserProfile)