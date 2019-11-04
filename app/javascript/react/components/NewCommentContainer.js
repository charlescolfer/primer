import React, { useState } from 'react'

const NewCommentContainer = props => {
  return (
    <div className="comment-form columns large-4">
      <form onSubmit={props.postComment}>
        <h5 className=""> Provide Feedback: </h5>
        <h6 className="text-center">{props.errors.user}</h6>
        <label>
          {props.errors.comment}
          <textarea
            type="text"
            name="body"
            value={props.newComment.body}
            onChange={props.handleInputChange}
          />
        </label>
        <div className="comment-buttons">
          <input
            className="button"
            type="submit"
            value="Add Comment"
            />
          <button className="button" onClick={props.clearForm}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default NewCommentContainer
