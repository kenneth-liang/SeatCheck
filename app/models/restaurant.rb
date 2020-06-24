class Restaurant < ApplicationRecord
    validates :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description, presence: true
end
