import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {
  let username = props.username
  let avatar = props.avatar
  let bio = props.bio
  return (
    <div className="background row">
      <div className="user-tile columns large-12">
        <div className="columns large-3">
          <img src={avatar.url} />
          <Link to={`/user/${props.id}`}>
            <p> - {username} </p>
          </Link>
        </div>
        <div className="columns large-9">
          <h6> {bio} </h6>
        </div>
      </div>
    </div>
  )
}

export default UserTile
