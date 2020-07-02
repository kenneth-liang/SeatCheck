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
require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
