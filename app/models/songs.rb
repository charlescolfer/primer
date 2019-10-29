class Songs < ApplicationRecord
  mount_uploader :song, SongUploader
  validates :song, presence: true
  validates :title, presence: true

  belongs_to :user
end
