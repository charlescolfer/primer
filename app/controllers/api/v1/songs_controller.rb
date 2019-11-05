class Api::V1::SongsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if params["user_id"]
      user = User.find(params["user_id"])
      songs = user.songs
    else
      songs = Song.all
    end
    render json: { songs: songs }
  end

  def show
    render json: { song: Song.find(params["id"]) }
  end

  def create
    new_song = Song.new(song_params)
    new_song.user = current_user
    if new_song.save
      render json: new_song
    else
      render json: new_song.errors
    end
  end

  private

  def song_params
    params.permit(:song, :title, :art, :description, :daw)
  end
end
