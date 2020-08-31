json.extract! restaurant, :id, :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description, :photo, :bphoto
# json.photoURL url_for(restaurant.photo)
# json.bphotoURL url_for(restaurant.bphoto)
json.countRating restaurant.ratings.pluck(:user_id).length