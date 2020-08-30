@ratings.each do |rating|
    json.set! rating.id do 
        json.partial! "/api/ratings/rating", rating: rating
    end 
end