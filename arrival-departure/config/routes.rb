Rails.application.routes.draw do
 
  get '/departures', to: 'departures#index', as: 'departures', defaults: { format: :json }
  get '/arrivals', to: 'arrivals#index', as: 'arrivals', defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
