class Api::FavoritesController < ApplicationController
  def index 
    user = User.find_by(id: params[:userId])

    if user 
      @favorites = user.favorites 
    else
      render json: ["User not found"], status: 401 
    end 
  end 

  def show 
    @favorite = Favorite.find(params[:id])
  end 

  def create 
    @favorite = Favorite.new
    @favorte.user_id = current_user.id 
    @favorite.restaurant_id = prarams[:id]

    if @favorite.save 
      @restaurant = @favorite.restaurant
      render 'api/restaurants/show'
    else 
      render json: @favorite.errors.full_messages, status: 401
    end 
  end 

  def destroy 
    @favorite = Favorite.find_by( user_id: current_user.id, restaurant_id: params[:id])
    if @favorite.destroy 
      # render 'api/restaurants/show'
      render json: @favorite
    else 
      render json: ["Only a Jedi can destroy what does not exist"], status: 401
    end 
  end 

  private 
  def favorite_params 
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end 

end
