# == Schema Information
#
# Table name: ratings
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  overall_score :integer          not null
#  review        :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Rating < ApplicationRecord
    validates :user_id, :restaurant_id, :review, presence: true;
    validates :overall_score, inclusion: {in: [1,2,3,4,5]}, presence: true;

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Restaurant


end
