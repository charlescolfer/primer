class Api::V1::SongsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    users = User.all
    if params["user_id"]
      user = User.find(params["user_id"])
      songs = user.songs
    else
      songs = Song.all
    end
    render json: { songs: songs, users: users }
  end

  def show
    render json: { song: Song.find(params["id"]) }
  end

  def create
    if user_signed_in?
      new_song = Song.new(song_params)
      new_song.user = current_user
      if new_song.save
        render json: new_song
      else
        render json: new_song.errors
      end
    else
      render json: {user: "You must be signed in to leave a comment."}
    end
  end

  private

  def song_params
    params.permit(:song, :title, :art, :description, :daw)
  end
end
