class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false

      t.timestamps

      t.belongs_to :song
      t.belongs_to :user
    end
  end
end
