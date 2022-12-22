require File.expand_path('config/environment', __dir__)

@dancefloor = []
UserTrackRelationship.all.order(updated_at: :desc).each do |relationship|
  @dancefloor.push(relationship.user) unless @dancefloor.include?(relationship.user)
end
p @dancefloor
