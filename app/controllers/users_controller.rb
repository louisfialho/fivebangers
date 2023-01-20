class UsersController < ApplicationController
  before_action :set_placeholder_no_banger, only: [:show, :edit]

  def show
    @user = User.find_by(username: params[:username].upcase)
    @dancefloor = []
    UserTrackRelationship.all.order(updated_at: :desc).each do |relationship|
      @dancefloor.push(relationship.user) unless @dancefloor.include?(relationship.user)
    end
  end

  def edit
    @user = User.find_by(username: params[:username].upcase)
  end

  def update
    @user = User.find(params[:id])
    @user.update(description: params[:user][:description])
    tracks = [params[:user][:track_1], params[:user][:track_2], params[:user][:track_3], params[:user][:track_4], params[:user][:track_5]]
    tracks.each.with_index(1) do |track_url, index|
      if !track_url.empty?
        track = Track.new(youtube_url: track_url)
        track.save
        if track.save
          # check if user has a track with this position
          if @user.user_track_relationships.where(position: index).empty? == false
            relationship = @user.user_track_relationships.where(position: index).first
            relationship.position = "archived"
            relationship.save
          end
          # assign the new track to the user and specify position
          UserTrackRelationship.create(user: @user, track: track, position: index)
        end
      end
    end
    # create tracks, relationships
    redirect_to user_path(@user.username)
  end

  private

  def set_placeholder_no_banger
    if device == "mobile"
      @placeholder = "www.youtube.com/AddBanger"
    elsif device == "tablet"
      @placeholder = "www.youtube.com/EditAndPasteBanger"
    elsif device == "desktop"
      @placeholder = "www.youtube.com/EditAndPasteYTLinkForBanger"
    end
  end

  def user_params
    params.require(:user).permit(:description, :track_1, :track_2, :track_3, :track_4, :track_5)
  end

end
