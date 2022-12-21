class User < ApplicationRecord

  has_many :user_track_relationships
  has_many :tracks, through: :user_track_relationships

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
