# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_29_171228) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "song_id"
    t.bigint "user_id"
    t.index ["song_id"], name: "index_comments_on_song_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "song", null: false
    t.string "title", null: false
    t.integer "count", default: 0
    t.string "art", default: "https://www.pngfind.com/pngs/m/104-1040225_music-symbols-png-music-picto-transparent-png.png"
    t.string "avatar", default: "https://i2.wp.com/eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png?fit=512%2C512&ssl=1"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_songs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "avatar"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
