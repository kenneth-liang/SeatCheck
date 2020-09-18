json.extract! restaurant, :id, :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description, :photo, :bphoto, :menu_link, :lat, :lng
# json.photoURL url_for(restaurant.photo)
# json.bphotoURL url_for(restaurant.bphoto)
json.countRating restaurant.ratings.pluck(:user_id).length
json.score_arr restaurant.score_arr
if current_user
  json.userFavorited !!restaurant.favorites.find_by(user_id: current_user.id)
end
