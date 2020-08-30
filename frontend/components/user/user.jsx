import React from "react";
import {Link} from "react-router-dom"

import ReservationIndex from '../reservation/reservation_index_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.favoriteRestaurants = this.favoriteRestaurants.bind(this)
  }

  componentDidMount() {
    Promise.all([this.props.fetchUser(this.props.currentUser.id) 
        ,this.props.fetchUserReservations(this.props.currentUser.id)
        ,this.props.fetchRestaurants()])
        ,this.props.requestUserFavorites(this.props.currentUser.id)
  }

  favoriteRestaurants() {
    let favorites = this.props.favorites;
    if (Object.keys(favorites).length === 0) {
      return (
        <div>
          <p>No Favorites</p>
        </div>
      )
    } else {
      return (
        <div>
          {Object.values(favorites).map((favorite, i) => 
            <section key={`favorite-${i}`} className="reservation-list">
              <div className="restaurant-detail-container">
                <Link to={`/restaurants/${favorite.restaurant.id}`} className="restaurant-name">
                  {favorite.restaurant.name} 
                </Link>
                <div>
                  Cuisine: {favorite.restaurnt.cuisine}
                </div>
                <div>
                  Phone: {favorite.restaurnt.phone_number}
                </div>
              </div>
            </section>
          )}
        </div>
      )
    }
  }

  render() {
    const {currentUser} = this.props

    return (
      <div className="page-container">

        <div className="page-header">
          <div className="page-header-content">
            <h1 className="full-name">{`${currentUser.first_name} ${currentUser.last_name}`}</h1>
          </div>
        </div>

        <div className="content-group">
          <nav className="page-nav">
            <ul>
              <li className="page-links">
                {/* <Link to="/reservations"> */}
                  Reservations
                  {/* </Link> */}
              </li>
              <li className="page-links">
                {/* <Link to="/favorites/"> */}
                  Saved Restaurants
                  {/* </Link> */}
              </li>
            </ul>
          </nav>
        </div>

        <div className="page-main-content">
          <div className="content-reservations">
            <div className="content header">
              <h3>Reservations</h3>
            </div>
            <div className="content-feed">
              <ReservationIndex restaurants={this.props.restaurants}
                 reservations={this.props.reservations} 
                />
            </div>
          </div>
          <div className="content-favorites">
            <div className="content header">
              <h3>Saved Restaurants</h3>
            </div>
            <div className="content-feed">
              <div>
                {this.favoriteRestaurants()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default UserProfile;