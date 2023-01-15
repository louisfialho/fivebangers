class Track < ApplicationRecord
  require 'securerandom'

  has_many :user_track_relationships
  has_many :users, through: :user_track_relationships

  validates :youtube_url, presence: true #must have a url
  validates :youtube_url, format: { with: /\A((http|https):\/\/)?(www.)?youtube.com\//,
message: "use a YouTube url" }

end
