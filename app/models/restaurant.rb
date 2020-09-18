# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip          :integer          not null
#  price        :integer          not null
#  cuisine      :string           not null
#  open_time    :datetime         not null
#  close_time   :datetime         not null
#  phone_number :string           not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  photo        :string
#  bphoto       :string
#
class Restaurant < ApplicationRecord
    validates :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number, :description, :photo, :bphoto, presence: true

    # has_one_attached :photo
    # has_one_attached :bphoto


    #associations 
    has_many :reservations,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Reservation

    has_many :ratings,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Rating

    has_many :favorites, 
        primary_key: :id, 
        foreign_key: :restaurant_id,
        class_name: :Favorite
    

    def self.search_by_key(keyword)
        Restaurant.where("lower(city) like ?", "%#{keyword.downcase}%")
            .or(Restaurant.where("lower(cuisine) like ?", "%#{keyword.downcase}%"))
            .or(Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%"))
            .or(Restaurant.where("price = ?", "#{keyword}"))
    end

    def self.in_bounds(bounds)
        ne_lat = bounds[:northEast][:lat].to_f
        ne_lng = bounds[:northEast][:lng].to_f
        sw_lat = bounds[:southWest][:lat].to_f
        sw_lng = bounds[:southWest][:lng].to_f

        Restaurant.where("lat between ? AND ? AND lng between ? AND ?", sw_lat, ne_lat,sw_lng, ne_lng)
    end

    def score_arr
        self.ratings.pluck(:overall_score)
    end
end
