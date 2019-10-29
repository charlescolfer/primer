class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song, null: false
      t.string :title, null: false
      t.integer :count, default: 0
      t.string :art, default: "https://www.pngfind.com/pngs/m/104-1040225_music-symbols-png-music-picto-transparent-png.png"
      t.string :avatar, default: "https://i2.wp.com/eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png?fit=512%2C512&ssl=1"

      t.timestamps

      t.belongs_to :user
    end
  end
end
