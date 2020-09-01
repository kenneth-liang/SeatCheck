# json.restaurant do 
#     json.set! @restaurant.id do 
#         json.extract! @restaurant, :id, :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description
#     end
# end 

json.restaurant do
  json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
end

# json.favorite do
#   json.partial! '/api/favorites/favorite', favorite: @favorite
# end

