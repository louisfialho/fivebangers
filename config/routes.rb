Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => 'registrations'}
  root to: 'pages#home'
  get 'pages/welcome', to: 'pages#welcome', as: "welcome"
  get 'users/:id', to: 'users#show', as: :user
  get "users/:id/edit", to: "users#edit", as: :edit_user
  patch "users/:id", to: "users#update"
  post "tracks", to: "tracks#create", as: :create_track
  get '/errors/club_is_full', to: 'pages#club_is_full', as: "club_is_full"
  get '/errors/only_youtube_urls', to: 'pages#only_youtube_urls', as: "only_youtube_urls"
end
