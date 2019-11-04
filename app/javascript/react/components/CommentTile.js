import React, { useState, useEffect } from 'react'

import CommentTileBody from './CommentTileBody'

const CommentTile = props => {
  const [user, setUser] = useState("")
  const [errors, setErrors] = useState("")
  let buttons = ""


  if (props.currentUser === props.userId) {
    buttons = (
      <div className="buttons">
        <button className="button edit" onClick={props.editReview}>Edit</button>
        <button className="button delete" onClick={handleClick}>Delete</button>
      </div>
    )
  }

  return (
    <CommentTileBody
      commentId={props.id}
      userId={props.userId}
      errors={errors}
      body={props.body}
      buttons={buttons}
    />
  )
}


export default CommentTile
