class Api::V1::UsersController < ApplicationController
  before_action :authorize_user

  def index
    users = User.all
    users.geocode
    render json: users
  end

  def show
    user = User.find(params["id"])
    user.geocode
    render json: user
  end

  protected

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Must be an signed in")
    end
  end
end
