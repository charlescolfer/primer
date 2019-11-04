class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :avatar, AvatarUploader

  validates :username, presence: true
  validates :password, length: { minimum: 7 }, on: :create
  validates :password, length: { minimum: 7 }, on: :update, allow_blank: true
  validates :city, presence: true
  validates :state, presence: true

  has_many :songs
  has_many :comments
end
