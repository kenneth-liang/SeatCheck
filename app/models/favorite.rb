# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Favorite < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
  # validates :user_id, uniqueness: {scope: :restaurant_id, message: "Already Favorited"}

  belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

  belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
    
end
