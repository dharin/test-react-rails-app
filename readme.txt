Pre-requisites
 - Need Rails 5.x.x configured
 - ruby 2.5.1
 - postgres

Steps for configuration
- copy project repo from => git clone (LINK)
- for rails app up and running, follow below steps
 - cd test-react-rails-app/arrival-departure
 - bundle install
 => You need to run all the migration stuff related to PostgreSQL
   - rails db:create
   - rails db:migrate
   - rails db:seed
 => Start server on 3001 port using -> rails s -p 3001

- for react up and running 
 - cd ../test-react-rails-app/arrival-departure-front
 => to start react server on port 3000
    - yarn start
