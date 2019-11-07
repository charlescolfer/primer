class AddZipToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zip, :string
  end
end
