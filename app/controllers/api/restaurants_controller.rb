class Api::RestaurantsController < ApplicationController
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

    def show 
        @restaurant = Restaurant.find(params[:id])
    end 
end
