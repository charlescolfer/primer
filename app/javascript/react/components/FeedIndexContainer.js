import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import SongTile from './SongTile'
// debugger

const FeedIndexContainer = props => {
  const [songs, setSongs] = useState([])
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
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const songTiles = songs.map(song => {
    return(
      <SongTile
        id={song.id}
        song={song.song}
        title={song.title}
        count={song.count}
        art={song.art}
        avatar={song.avatar}
      />
    )
  })

  return (
    <div className="row text-center feed-box">
      <h2>
        Comment, Like, Discuss
      </h2>
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
