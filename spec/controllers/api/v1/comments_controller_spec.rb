require "rails_helper"

RSpec.describe Api::V1::CommentsController, type: :controller do
  describe "GET#index" do
    it "should return a list of all comments" do
      song = Song.create(
        song: "regal.wav",
        title: "Regal",
        art: "https://www.pngfind.com/pngs/m/104-1040225_music-symbols-png-music-picto-transparent-png.png",
        description: "this is a description",
        daw: "Ableton Live"
      )
      comment = Comment.create(
        body: "This is great, but it could use some more mixing.",
        song_id: 23
      )

      get :index, params: { song_id: song.id }

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json["comments"][0]["body"]).to eq comment.body
    end
  end
end
