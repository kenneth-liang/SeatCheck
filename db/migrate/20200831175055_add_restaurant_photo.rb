class AddRestaurantPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :photo, :string
    add_column :restaurants, :bphoto, :string
  end
end
