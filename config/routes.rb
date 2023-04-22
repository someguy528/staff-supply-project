Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do 
    resources :users, only: [:create, :index, :show, :delete]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'
    
    
  end
  
  options '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
