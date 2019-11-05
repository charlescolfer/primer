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
      <Link to={`/songs/${props.id}`}>
        <img className="song-tile-image columns large-3" src={art}></img>
      </Link>
      <Link to={`/songs/${props.id}`}>
        <h3> {title} </h3>
        <p> {description} </p>
      </Link>
      <audio controls className="audio-player columns large-9">
        <source src={song} type="audio/mpeg"/>
      </audio>
    </div>
  </div>
  )
}

export default MySongsTile
