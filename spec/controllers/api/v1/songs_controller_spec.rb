require "rails_helper"

RSpec.describe Api::V1::SongsController, type: :controller do
  describe "GET#index" do
    it "should return a list of all songs posted" do
      song = Song.create(
        song: "regal.wav",
        title: "Regal",
        art: "https://www.pngfind.com/pngs/m/104-1040225_music-symbols-png-music-picto-transparent-png.png",
        description: "this is a description",
        daw: "Ableton Live"
      )

    end
  end
end
