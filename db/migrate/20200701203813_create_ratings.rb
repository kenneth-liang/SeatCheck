class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false 
      t.integer :overall_score, null: false 
      t.text :review 
      t.timestamps
    end
    add_index :ratings, :user_id
    add_index :ratings, :restaurant_id
  end
end
