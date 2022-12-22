class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :club_is_full ]

  def home
  end

  def club_is_full
  end
end
