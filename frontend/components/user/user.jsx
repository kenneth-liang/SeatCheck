import React from "react";
import {Link} from "react-router-dom"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.reservations = this.reservations.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchUserReservations(this.props.currentUser.id);
  }

  deleteReservation(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteReservation(id);
    };
  }

  reservations() {
    const reservations = [];
    const allRes = Object.values(this.props.reservations);

    allRes.forEach((reservation) => {
      reservations.push(reservation);
    })

    if (reservations.length > 0) {
      return (
        <div>
          {reservations.map((res) => {
            return (
              <div>
                <div>{res.restaurant.name}</div>
                <div>{res.date}</div>
                <div>{res.time}</div>
                <div>{res.party}</div>
                <button type="button" onClick={this.deleteReservation(res.id)}>
                  Cancel
                </button>
              </div>
            )
          }
          )}
        </div>
      );
    } else {
      return <p className="no-res">No Reservations</p>;
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="full-name">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</h1>
          </div>
        </div>

        {/* <div className="content-group">
          <nav className="page-nav">
            <ul>
              <li className="page-links">
                <Link to="/reservations">Reservations</Link>
              </li>
              <li className="page-links">
                <Link to="/favorites/">Saved Restaurants</Link>
              </li>
            </ul>
          </nav>
        </div> */}

        <div className="page-main-content">
          <div className="content-reservations">
            <div className="content header">
              <h3>Reservations</h3>
            </div>
            <div className="content-feed">
              {this.reservations()}
            </div>
          </div>
          <div className="content-favorites">
            <div className="content header">
              <h3>Saved Restaurants</h3>
            </div>
            <div className="content-feed">
              <div>Display Favorites here, hidden when none</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default UserProfile;