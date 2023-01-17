Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => 'registrations'}
  root to: 'pages#home'
  get 'pages/welcome', to: 'pages#welcome', as: "welcome"
  get 'pages/backdoor', to: 'pages#new_or_existing_member', as: "new_or_existing_member"
  get 'pages/help', to: 'pages#help_adding_bangers', as: "help"
  get '/:username', to: 'users#show', as: :user
  get "/:username/edit", to: "users#edit", as: :edit_user
  patch "/:id", to: "users#update"
  post "tracks", to: "tracks#create", as: :create_track
  get '/errors/club_is_full', to: 'pages#club_is_full', as: "club_is_full"
  get '/errors/only_youtube_urls', to: 'pages#only_youtube_urls', as: "only_youtube_urls"
end
