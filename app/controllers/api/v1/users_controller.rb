class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    if params["/users"]
      if !params
        users = User.all
      else
        users = User.search_by_user(params["/users"][:query])
      end
    end
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


  private

  def user_params
    params.permit(:city, :state, :zip, :username)
  end
end
