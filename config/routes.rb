Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :reservations do
    resources :marchandise, only: [:new, :create, :destroy]
    resources :review, only: [:new, :create, :destroy]
  end
  get 'equipage', to: 'pages#equipage'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
