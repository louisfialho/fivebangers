class TracksController < ApplicationController

  def create
    # create track
    @track = Track.new(track_params)
    @track.save
    if @track.save
      # get position
      @position = params[:position]
      # get user
      @user = current_user
      # check if user has a track with this position
      if @user.user_track_relationships.where(position: @position).empty? == false
        relationship = @user.user_track_relationships.where(position: @position).first
        relationship.position = "archived"
        relationship.save
      end
      # assign the new track to the user and specify position
      UserTrackRelationship.create(user: @user, track: @track, position: @position)
    end
  end

  private

  def track_params
    params.require(:track).permit(:youtube_url, :position)
  end

end
