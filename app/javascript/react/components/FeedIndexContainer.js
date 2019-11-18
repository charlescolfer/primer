import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import SongTile from './SongTile'

const FeedIndexContainer = props => {
  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {fetch("/api/v1/songs", {
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
      setSongs(body.songs)
      setUsers(body.users)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let username = ""

  const songTiles = songs.map(song => {
    users.map(user => {
      if (user.id === song.user_id) {
        username = user.username
      }

    })
    return(
      <SongTile
        key={song.id}
        id={song.id}
        song={song.song}
        title={song.title}
        count={song.count}
        art={song.art}
        description={song.description}
        daw={song.daw}
        username={username}
        userId={song.user_id}
      />
    )
  })

  return (
    <div className="row text-center feed-box">
      <h1>
        Listen, Comment & Discuss
      </h1>
      <hr />
      <div className="row">
        {songTiles}
      </div>
      <div className="button">
        <Link to="/songs/new"> Upload! </Link>
      </div>

    </div>
  )
}

export default FeedIndexContainer
