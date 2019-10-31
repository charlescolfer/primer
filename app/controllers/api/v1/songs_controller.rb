class Api::V1::SongsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { songs: Song.all }
  end

  def show
    render json: { song: Song.find(params["id"]) }
  end

  def create
    binding.pry
    new_song = Song.new(song_params)
    binding.pry
    if new_song.save
      render json: new_song
    else
      render json: new_song.errors
    end
  end

  private

  def song_params
    params.permit(:song, :title, :art)
  end
end
