# PRIMER: A MUSIC APP FOR DISCUSSION AND COLLBORATION
 Primer is a platform for musicians of any genre to have an online space and community to show their works in progress, receive constructive criticism, engage in meaningful conversations and find collaborators for future/unfinished products. 
 
 # *** Currently working through debugging deployment issues, to demo, see Running Locally ***

# Technologies / APIs
Ruby 2.6.5
ActiveRecord
Rails 5.23
React 16.8.0
React Dropzone
Google Map API
Foundation Grid
Devise
Geocoder
Carrierwave

# Running Locally
Download the repository and run yarn install and bundle install in your terminal to install all necessary packages/libraries.
Set up your database:
``` 
bundle exec rake db:create
bundle exec rake db:migrate 
```
Run the application locally by starting a rails server and a yarn server in separate windows in your terminal:
```
yarn start
rails server
```
In your browswer, navigate to `localhost:3000` to view the application.

# Todo
- Make deployed heroku version properly connect to AWS s3 bucket for cloud storage of audio/image files.
- Fix edit button for comments
- Update comment associations to allow 'comments have many comments' for thread simulation.
- Finish test suites.
