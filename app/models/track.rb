class Track < ApplicationRecord
  has_many :user_track_relationships
  has_many :users, through: :user_track_relationships

  validates :youtube_url, presence: true #must have a url
  # validates :youtube_url, format: { with: /\A.*@.*\.com\z/ } #regex a tester pr youtube link
end
