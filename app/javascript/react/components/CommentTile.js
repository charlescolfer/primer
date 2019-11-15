import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CommentTile = props => {
  const [user, setUser] = useState("")
  const [errors, setErrors] = useState("")
  const [commentId, setCommentId] = useState(0)

  const deleteComment = () => {
    fetch(`/api/v1/songs/${props.songId}/comments/${props.commentId}`, {
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
      props.resetPage()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let buttons = ""

  if (props.currentUser === props.userId) {
    buttons = (
      <div>
        <div className="edit-delete button">
          <button onClick={props.editReview}>Edit</button>
        </div>
        <div className="edit-delete button">
          <button onClick={deleteComment}>Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div className="comment column large-12">
      <div>
        <h5> {props.body} </h5>
      </div>
      <div className="username column large-6">
        <Link to={`/user/${props.userId}`}>
          <p> - {props.username} </p>
        </Link>
      </div>
      <div className="column large-6">
        {buttons}
      </div>
    </div>
  )
}


export default CommentTile
