class Api::RestaurantsController < ApplicationController
    def index 
        if params[:search] 
            if params[:search].length > 1 
                @restaurants = narrowSearch(params[:search])
            else 
                @restaurants = Restaurant.search_by_key(params[:search][0])
            end
                        
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


    private 
    def narrowSearch(array)
        res = []
        array.each {|keyword| res.concat(Restaurant.search_by_key(keyword))}
        counts = Hash.new(0)
        res.each{ |ele| counts[ele] += 1}
        counts.select{|v,count| count > 1}.keys
    end
end
