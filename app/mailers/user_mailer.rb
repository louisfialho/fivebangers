class UserMailer < ApplicationMailer
  default from: 'fivebanggang@gmail.com'

  def welcome_email
    @user = params[:user]
    mail(to: @user.email, subject: 'Welcome to the club')
  end
end
