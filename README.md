# SeatCheck

[Seat Check Live](https://seat-check.herokuapp.com/#/)

Seat Check is a full-stack web application inspired by OpenTable. The backend is built on Ruby on Rails with a PostgreSQL database and the frontend consists of a React/Redux architecture. It features restaurants that users can view, book and review. Users can search for restaurants by location, restaurant name, or cuisines through the search bar or by clicking on a specific image on index page. The city image are responsive design.

![seatcheck](https://user-images.githubusercontent.com/59374267/95291097-a29ce180-0823-11eb-99dd-8f3643963275.png)


## Description

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

### Ratings 
Users can not only save their favorite restuants (which can be viewed on their profile) but also post ratings and reviews for the restaurants they've been to. Once a review is posted, their rating will imediately impact the resturant's current score. Unauthorised users will have access to this feature and will be prompted to login or sign up. 

Dynamic nav bar that changes depending on whether a user is authenticated

### Features 
* User Authentication
* Login/signup forms displayed in modal windows
* Homes index and show pages
* Search pages using search bar
* Make reservations for restaurants
* View all future reservation and past reservation on user profile page
* Write reviews on restaurant
* Favorite restaurant

### Technologies 
* JavaScript
* Ruby on Rails 
* React 
* Redux
* PostgreSQL
* BCrypt 

### Future Features 
* Filter drop down as user types out their search
* User profile images (AWS S3) 
* Allow users to upload photos along with their rating


