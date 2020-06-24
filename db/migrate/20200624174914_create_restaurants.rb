class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false 
      t.string :address, null: false 
      t.string :city, null: false
      t.string :state, null: false 
      t.integer :zip, null: false 
      t.integer :price, null: false 
      t.string :cuisine, null: false 
      t.datetime :open_time, null: false 
      t.datetime :close_time, null: false 
      t.string :phone_number, null: false 
      t.text :description, null: false

      t.timestamps
    end
    add_index :restaurants, :name 
    add_index :restaurants, :city 
    add_index :restaurants, :state 
    add_index :restaurants, :cuisine 
    add_index :restaurants, :price
  end
end
