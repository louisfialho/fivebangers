Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'users/:id', to: 'users#show', as: :user
  get "tracks/new", to: "tracks#new"
  post "tracks", to: "tracks#create", as: :create_track
  get '/errors/club_is_full', to: 'pages#club_is_full', as: "club_is_full"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
