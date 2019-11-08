Rails.application.routes.draw do
  root 'homes#index'
  get '/songs', to: 'homes#index'
  get '/songs/new', to: 'homes#index'
  get '/songs/:id', to: 'homes#index'
  get '/login', to: 'homes#index'
  get '/users', to: 'homes#index'
  get '/user/:id', to: 'homes#index'
  get '/search', to: 'homes#index'




  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :create, :show] do
        resources :comments, only: [:index, :create]
      end
      resources :users, only: [:index, :show] do
        resources :songs, only: [:index, :show]
        resources :comments, only: [:create, :destroy]
      end
      resources :comments, only: [:index, :show]
    end
  end
end
