class Track < ApplicationRecord
  require 'securerandom'

  has_many :user_track_relationships
  has_many :users, through: :user_track_relationships

  validates :youtube_url, presence: true #must have a url
  validates :youtube_url, format: { with: /\A((http|https):\/\/)?(www.)?youtube.com\//,
message: "use a YouTube url" }

  before_create do
    self.youtube_url = self.youtube_url + SecureRandom.urlsafe_base64 if self.youtube_url.length < 50
  end
end
