import React from "react"

class UserFavorites extends React.Component {
  constructor(props) {
    super(props)

    this.favoriteRestaurants = this.favoriteRestaurants.bind(this)
  }


  favoriteRestaurants() {
    if (Object.keys(this.props.favorites).length === 0) {
      return (
        <div>
          <p>No Favorites</p>
        </div>
      )
    } else {
      return (
        <div>
          {Object.values(this.props.favorites).map((favorite, i) => {
            return (
              <section key={`favorite-${i}`} className="favorite-list">
                <div className="restaurant-detail-container">
                  <div className="restaurant-icon-container">
                    <img className="restaurant-icon" src={favorite.restaurant.photo}></img>
                  </div>
                  <div className="favorite-info">
                    <Link to={`/restaurants/${favorite.restaurant.id}`} className="restaurant-name">
                      {favorite.restaurant.name}
                    </Link>
                    <div className="remove-fav">
                      <i className="fas fa-bookmark"></i> Remove from saved restaurants
                    </div>
                    <div className="favorite-cuisines">
                      {favorite.restaurant.cuisine} | {favorite.restaurant.city}
                    </div>
                  </div>
                  <Link to={`/restaurants/${favorite.restaurant.id}`} className="red-btn">
                    Reserve Now
                    </Link>
                </div>
              </section>
            )
          }
          )}
        </div>
      )
    }
  }

  render() {
    render(
      <div className="content-favorites">
        <div className="content-header">
          <h3>Saved Restaurants</h3>
        </div>
        <div className="content-feed">
          <div>
            {/* {this.favoriteRestaurants()} */}
            hello favorites
          </div>
        </div>
      </div>
    )
  }
}

export default UserFavorites