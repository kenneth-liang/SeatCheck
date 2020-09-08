class AddRestaurantMenuLink < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :menu_link, :string
  end
end
