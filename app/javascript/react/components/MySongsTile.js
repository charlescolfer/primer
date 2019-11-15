import React from 'react'
import { Link } from 'react-router-dom'

const MySongsTile = props => {
  let art = props.art
  let song = props.song.url
  let title = props.title
  let description = props.description
  let daw = props.daw
  return (
  <div className="post row">
    <div className="columns large-12 tile">
      <div className="columns large-6">
        <Link to={`/songs/${props.id}`}>
          <img className="song-tile-image" src={art}></img>
        </Link>
      </div>
      <div className="columns large-6">
        <Link to={`/songs/${props.id}`}>
          <h3> {title} </h3>
        </Link>
        <p> {description} </p>
      </div>
      <audio controls className="audio-player center">
        <source src={song} type="audio/mpeg"/>
      </audio>
    </div>
  </div>
  )
}

export default MySongsTile
