import React, { useState, useEffect } from 'react'

import CommentTile from './CommentTile'

const CommentIndexContainter = props => {

  let username = ""

  const commentTiles = props.comments.map(comment => {
    props.users.map(user => {
      if (user.id === comment.user_id) {
        username = user.username
      }
    })
      return(
        <CommentTile
        key={comment.id}
        commentId={comment.id}
        body={comment.body}
        userId={comment.user_id}
        deleteComment={props.deleteComment}
        currentUser={props.currentUserId}
        username={username}
        songId={props.songId}
        resetPage={props.resetPage}
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
