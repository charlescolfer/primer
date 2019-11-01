class Comments < ApplicationRecord
  validates :comments, presence: true

  belongs_to :song
  belongs_to :user
end
