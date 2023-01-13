class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :show ]

  def show
    @user = User.find(params[:id])
    @dancefloor = []
    UserTrackRelationship.all.order(updated_at: :desc).each do |relationship|
      @dancefloor.push(relationship.user) unless @dancefloor.include?(relationship.user)
    end
  end

  def edit
    @user = current_user
  end
end
