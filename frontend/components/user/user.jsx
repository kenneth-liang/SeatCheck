import React from "react";
import {Link} from "react-router-dom"


class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidiMouth(){
        this.props.fetchUser(this.props.user.id)
    }

    render () {
        return (
          <div className="page-container">
            <div className="page-header">
              <div className="page-header-content">
                <h1 className="full-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</h1>
              </div>
            </div>

            <div className="content-group">
              <nav className="page-nav">
                <ul>
                  <li className="page-links">
                    <Link to="/api/reservations">Reservations</Link>
                  </li>
                  <li className="page-links">
                    <Link to="/api/favorites/">Saved Restaurants</Link>
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
                  <div>Display Reservations here, hidden when none</div>
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