class Track < ApplicationRecord
  require 'securerandom'

  has_many :user_track_relationships
  has_many :users, through: :user_track_relationships

  validates :youtube_url, presence: true #must have a url

end
