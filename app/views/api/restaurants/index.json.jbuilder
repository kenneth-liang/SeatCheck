@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        # json.extract! restaurant, :id, :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description
        # json.photoURL url_for(restaurant.photo)
        # json.bphotoURL url_for(restaurant.bphoto)
        json.partial! '/api/restaurants/restaurant', restaurant: restaurant
    end
end