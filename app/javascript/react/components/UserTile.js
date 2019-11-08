import React from 'react'

const UserTile = props => {
  let username = props.username
  let avatar = props.avatar
  return (
    <div>
      <div className="user-tile">
        <img src={avatar.url} />
        <p> {username} </p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default UserTile
