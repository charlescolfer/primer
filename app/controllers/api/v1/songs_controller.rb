class Api::V1::SongsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { songs: Song.all }
  end

  def show
    render json: { song: Song.find(params["id"]) }
  end

  def create
    if user_signed_in?
      new_song = Song.new(song_params)

      if new_song.save
        render json: new_song
      else
        render json: new_song.errors
      end
    else
      render json: {user: "You must be signed into your account to post new content."}
    end
  end

  private

  def song_params
    params.require(:song).permit(:song, :title, :count, :art, :avatar)
  end
end
