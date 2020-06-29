# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  party         :integer          not null
#  time          :string           not null
#  date          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, :party, :time, :date, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
        # optional: true

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
        # optional: true
end
