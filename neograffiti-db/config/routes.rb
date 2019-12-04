Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :posts do
    resources :comments
  end
  get '/users/:user_id/posts', to: 'posts#index_by_user'
  post '/users/:user_id/posts', to: 'posts#create_by_user'

end
