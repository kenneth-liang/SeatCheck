class Api::RestaurantsController < ApplicationController
    def index 
        @restaurants = Restaurant.all
    end 

    def show 
        @restaurant = Restaurant.find_by(id: params[id])
    end 
end
