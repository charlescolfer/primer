import React from 'react'

const CommentTileBody = props => {
  let user = props.id

  return (
    <div className="comment">
      <div>
        <p> {props.body} </p>
      </div>
      <div>
        {props.buttons}
      </div>
    </div>
  )
}

export default CommentTileBody
