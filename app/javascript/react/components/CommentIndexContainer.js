import React, { useState, useEffect } from 'react'

import CommentTile from './CommentTile'

const CommentIndexContainter = props => {
  const [commentId, setCommentId] = useState(0)
  const [currentUserId, setCurrentUserId] = useState(0)

const deleteComment = (commentId) => {
  fetch(`/api/v1/songs/${songId}/comments/${commentId}`, {
    credentials: "same-origin",
    method: "DELETE",
    body: JSON.stringify(props.id),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      return response
    } else {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    }
  })
  .then(response => response.json())
  .then(body => {
    setMessage(body.message)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const commentTiles = props.comments.map(comment => {
      return(
        <CommentTile
        key={comment.id}
        id={comment.id}
        body={comment.body}
        userId={comment.userId}
        deleteComment={deleteComment}
        currentUser={currentUserId}
        />
      )
    }
  )

  return (
    <div className="comment-list">
      {commentTiles}
    </div>
  )
}

export default CommentIndexContainter
