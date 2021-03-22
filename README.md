# SeatCheck

[Seat Check Live](https://seat-check.herokuapp.com/#/)

Seat Check is a full-stack web application inspired by OpenTable. The backend is built on Ruby on Rails with a PostgreSQL database and the frontend consists of a React/Redux architecture. It features restaurants that users can view, book and review. Users can search for restaurants by location, restaurant name, or cuisines through the search bar or by clicking on a specific image on index page. 

![seatcheck](https://user-images.githubusercontent.com/59374267/95291097-a29ce180-0823-11eb-99dd-8f3643963275.png)


## Description

### Features 
Users can navigate Seat Check's selection of restaurants by using the search and filter tool. Based on their desire, the user can search either by location or category. This allows them to condense the list of restaurants available to make a selection.

<img width="981" alt="Screen Shot 2020-10-06 at 10 41 07 PM" src="https://user-images.githubusercontent.com/59374267/95291860-3a4eff80-0825-11eb-9954-b9421b204fe4.png">

The Restaurant show pages includes information to prompt the user towards reserving a table, ratings, reviews, type of cuisine, esitmate cost of dining, and contact information. This page also includes a reservation form that stays with the user while scrolling through the restaurant page which keeps the incentive to make a booking once the user has enough information. 

<img width="1392" alt="Screen Shot 2020-10-06 at 10 46 07 PM" src="https://user-images.githubusercontent.com/59374267/95292130-bfd2af80-0825-11eb-8dce-3c105edfda44.png">



### Search
Seat Check makes it easy for users to look up restuarants to find open reservations. Users can search by cuisines, retaurant names, a specific location, or see all restaurants partnered with Seat Check. 

```ruby
    def index 
        if params[:search] 
            @restaurants = Restaurant.search_by_key(params[:search])
            if @restaurants 
                @restaurants
            else 
                render json: ["No Restaurant Found"], status: 404
            end 
        else 
            @restaurants = Restaurant.all
        end

        render :index
    end 
        
    def self.search_by_key(keyword)
        Restaurant
            .where("lower(city) like ?", "%#{keyword.downcase}%")
            .or(Restaurant.where("lower(cuisine) like ?", "%#{keyword.downcase}%"))
            .or(Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%"))
    end
```

### Reservations 
Reservation form is present inside each restuarant's show page. Once a user selects the time and submit the form, the information will be stored in the database and form an association between the user and the restaurant. 

```javascript
    let resInfo = {
      restaurant_id: this.state.restaurant_id,
      user_id: this.state.userId,
      party: this.state.party,
      date: this.state.date,
      time: this.state.time,
    };

    this.props.createReservation(resInfo)
    this.props.clearErrors();
```


### Ratings 
Users can not only save their favorite restuants (which can be viewed on their profile) but also post ratings and reviews for the restaurants they've been to. Once a review is posted, their rating will imediately impact the resturant's current score. When When unauthorised users try to access, they will be encouraged to sign up or will be redirected to homepage by protected routes.

<img width="613" alt="Screen Shot 2020-10-06 at 11 07 46 PM" src="https://user-images.githubusercontent.com/59374267/95293685-c57dc480-0828-11eb-935a-af9e0644044f.png">


### Technologies 
Seat Check was developed with a PostgreSQL database, Ruby on Rails backend, and hosted by Heroku. WHne communicatin with the backend, the application uses RESTful API's and respondes with JSON data. The frontend was designed with React, Redux and styled using CSS.

Other tools used in Seat Check are JBuilder, NodeJS, JQuery to make AJAX requests, BCrypt for hashing passwords, Node Package Manager (npm), Webpack, React DOM, React Router, and React History for browser manipulation. 


### Code Snippets 

When retrieving all the restaurants for search, Seat Check uses ```fetchRestaurants``` RESTful call to populate the initial restauranants. Upon clicking "Let's Go" (on the home page) or changing location (in the map view), the application then uses ```searchRestaurants``` RESTful call to retrieve the restaurants matching the search criteria. Once the user clicks on the restaurant, another call is made using ```fetchRestaurant``` to retreive the information that populates the show page.


```javascript 
export const fetchRestaurants = () => {
    return  $.ajax({
        method: "GET",
        url: "/api/restaurants",
    })
}
   

export const fetchRestaurant = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${id}`, 
    })
}

export const searchRestaurants = search => {
    return $.ajax({
      method: "GET",
      url: "/api/restaurants",
      data: {search}
    });
}
```

### Future Features 
* User profile images (AWS S3) 
* Allow users to upload photos along with their rating
* Reservation Editing Page


