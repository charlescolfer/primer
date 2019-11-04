class Api::V1::UsersController < ApplicationController
  before_action :authorize_user

  def index
    users = User.all
    render json: users
  end

  protected

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Must be an signed in")
    end
  end
end
