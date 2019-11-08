import React, { useState, useEffect } from 'react'

import UserTile from './UserTile'

const UserIndexContainer = props => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    let search = ""
    if (props.location.search) {
      search = props.location.search
    }
    fetch(`/api/v1/users${search}.json`, {
    credentials: 'same-origin',
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setUsers(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const userTiles = users.map(user => {
    return (
      <UserTile
        key={user.id}
        id={user.id}
        username={user.username}
        avatar={user.avatar}
      />
    )
  })


  return (
    <div>
      {userTiles}
    </div>
  )
}

export default UserIndexContainer
