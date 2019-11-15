import React from 'react'
import { Link } from 'react-router-dom'

const SongTile = props => {
  let art = props.art
  let song = props.song.url
  let title = props.title
  let description = props.description
  let daw = props.daw
  let username = props.username
  let userId = props.userId
  return (
  <div className="row">
    <div className="columns large-12 tiles">
      <Link to={`/songs/${props.id}`}>
        <img className="song-tile-image columns large-3" src={art}></img>
      </Link>
      <Link to={`/songs/${props.id}`}>
        <h3> "{title}" </h3>
      </Link>
      <Link to={`/user/${userId}`}>
        <h6> by: {username} </h6>
      </Link>
      <audio controls className="audio-player columns large-9">
        <source src={song} type="audio/mpeg"/>
      </audio>
    </div>
  </div>
  )
}

export default SongTile
