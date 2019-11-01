import React, { useState, useEffect } from 'react'

const SongList = props => {
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

  const songList = songs.map(song => {
    return(
      <li key={songs.id}>
        {songs.name}
      </li>
    )
  })

  return(
    <div className="small-12 medium-3 columns songs-list">
      <h4 className="text-center list-title">Current Songs</h4>
      <hr />
      <ul>
        {songList}
      </ul>
    </div>
  )
}

export default SongList
