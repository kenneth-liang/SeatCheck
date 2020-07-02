import React from "react";
import {Link} from "react-router-dom"

import ReservationIndex from '../reservation/reservation_index_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Promise.all([this.props.fetchUser(this.props.currentUser.id) 
        ,this.props.fetchUserReservations(this.props.currentUser.id)
        ,this.props.fetchRestaurants()])
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default UserProfile;