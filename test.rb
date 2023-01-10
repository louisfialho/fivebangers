require File.expand_path('config/environment', __dir__)
require 'securerandom'

youtube_url = "https://www.youtube.com/watch?v=B-d5l0nkStA"
youtube_url = youtube_url + SecureRandom.urlsafe_base64 if youtube_url.length < 50
p youtube_url
