class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    song = Song.find(params["song_id"])
    user_id = 0
    if current_user
      user_id = current_user.id
    end
    render json: { comments: song.comments, user_id: user_id }
  end

  def create
    new_comment = Comment.new(comment_params)
    song = Song.find(params["song_id"])
    new_comment.song = song
    new_comment.user = current_user
    if new_comment.save
      render json: new_comment
    else
      render json: new_comment.errors
    end
  end


  def destroy
    Comment.find(params[:id]).destroy
    render json: { message:
      {
        messageText: "Comment deleted",
        refresh: true
      }
    }
  end

  # def update
  #   edited_comment = Comment.find(params["id"])
  #   if edited_comment.user == current_user
  #     if edited_comment.update(comment_params)
  #       render json: edited_comment
  #     else
  #       render json: edited_comment.errors
  #     end
  #   else
  #     render json: {user: "You are not permitted to edit this comment."}
  #   end
  # end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
