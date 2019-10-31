class Song < ApplicationRecord
  mount_uploader :song, SongUploader

  validates :song, presence: true
  validates :title, presence: true

  belongs_to :user, optional: true
end
