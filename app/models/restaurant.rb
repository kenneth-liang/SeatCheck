class Restaurant < ApplicationRecord
    validates :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description, presence: true

    has_one_attached :photo
    has_one_attached :bphoto


    def self.search_by_key(keyword)
        Restaurant.where("lower(city) like ?", "%#{keyword.downcase}%")
            .or(Restaurant.where("lower(cuisine) like ?", "%#{keyword.downcase}%"))
    end
end
