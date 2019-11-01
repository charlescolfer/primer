import React from 'react'
import { Link } from 'react-router-dom'

const SongTile = props => {
  let art = props.art
  let song = props.song.url
  let title = props.title
  return (
    <div className="columns large-12 tiles">
      <img className="song-tile-image" src={art}></img>
      <audio controls className="audio-player">
        <source src={song} type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default SongTile
