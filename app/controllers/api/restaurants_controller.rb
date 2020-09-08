class Api::RestaurantsController < ApplicationController
    def index 
        if params[:search] 
            # input array 
            # output array of objects 
            searchArray = params[:search]
            # searchArray = ["las vegas", "french", "asian"]
            res = [] 
            # for (let i = 0; i < searchArray.length; i + 1) {
            #     let keyword = searchArray[i];
            #     res.push(Restaurant.search_by_key(keyword));
            # }
            searchArray.each do |keyword| 
                res.concat(Restaurant.search_by_key(keyword))
            end

            # @restaurants = Restaurant.search_by_key(params[:search][0])
            @restaurants = res

            if @restaurants 
                @restaurants
            else 
                render json: ["No Restaurant Found"], status: 404
            end 

            # if params[:search][:price]
            #     @restaurants = @restaurants.where(:price => params[:search][:price] )
            # end
            # if params[:search][:cuisine]
            #     @restaurants = @restaurants.where(:cuisine => params[:search][:cuisine] )
            # end

        else 
            @restaurants = Restaurant.all
        end
        render :index
    end 

    def show 
        @restaurant = Restaurant.find(params[:id])
    end 
end
