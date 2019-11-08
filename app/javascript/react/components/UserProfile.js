import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MySongsTile from './MySongsTile'
import MapComponent from './MapComponent'

const UserProfile = props => {
  const [user, setUser] = useState({
    avatar: "",
    city: "",
    state: "",
    username: "",
    latitude: 0,
    longitude: 0
  })
  const [songs, setSongs] = useState([])

  let userId = props.match.params.id

  useEffect(() => {fetch(`/api/v1/users/${userId}`, {
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
      setUser(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  useEffect(() => {fetch(`/api/v1/users/${userId}/songs`, {
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
      <MySongsTile
        key={song.id}
        id={song.id}
        song={song.song}
        title={song.title}
        art={song.art}
        description={song.description}
        daw={song.daw}
      />
    )
  })

  return (
    <div className="whole-page">
      <div className="username-title row">
        <h1> {user.username} </h1>
      </div>
      <div className="page row large-12">
        <div className="song-feed column large-9 small-9">
          <p> {songTiles} </p>
        </div>
        <div className="profile-block column large-3 small-3">
          <img src={user.avatar.url}/>
          <h5> {user.city}, {user.state} </h5>
          <h6> Genre will go here </h6>
          <h6> the about me section will go here! </h6>
          <div className="map-component">
          <MapComponent
            latitude={user.latitude}
            longitude={user.longitude}
            />
          </div>
          <div>
          </div>
          <div className="button">
            <Link to="/songs"> Back to Feed </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
