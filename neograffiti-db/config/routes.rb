Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :posts do
    resources :comments
  end
  get '/users/:user_id/posts', to: 'posts#index_by_user'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
