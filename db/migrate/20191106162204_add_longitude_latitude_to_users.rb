class AddLongitudeLatitudeToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :longitude, :float
    add_column :users, :latitude, :float
  end
  def down
    remove_column :users, :longitude
    remove_column :users, :latitude
  end
end
