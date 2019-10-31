Rails.application.routes.draw do
  root 'homes#index'
  get '/songs', to: 'homes#index'
  get '/songs/new', to: 'homes#index'
  get '/login', to: 'homes#index'



  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :create, :show]
    end
  end
end
