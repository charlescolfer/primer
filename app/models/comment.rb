class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :song
  belongs_to :user
end
