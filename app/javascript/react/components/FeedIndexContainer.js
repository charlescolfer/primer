import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SongTile from './SongTile'

const FeedIndexContainer = props => {
  const [songs, setSongs] = useState([])
  const [showButton, setShowButton] = useState(false)
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
      setShowButton(body.user)
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

  let button = ""
  if (showButton) {
    button = <Link to="/songs/new">Upload</Link>
  }
  return (
    <div>
      <p>
        Primer Song Feed
      </p>
      <hr />
      <div>
        {songTiles}
      </div>
      <div className="text-center row">{button}</div>
    </div>
  )
}

export default FeedIndexContainer
