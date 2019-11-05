require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    username { 'testuser' }
    city { 'Boston' }
    state { 'MA' }
  end

  factory :song do
    title { 'song title' }
    song { 'song.wav' }
    description { 'this is a description' }
    daw { 'Logic Pro' }
  end

end
