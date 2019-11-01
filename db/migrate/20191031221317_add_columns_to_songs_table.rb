class AddColumnsToSongsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :description, :string, default: "NA"
    add_column :songs, :daw, :string, default: "NA"
  end
end
