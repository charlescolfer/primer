import React from 'react'
import { Link } from 'react-router-dom'

const SongTile = props => {
  let art = props.art
  let song = props.song
  return (
    <div className="columns small-12 medium-6 large-4">
      <audio controls>
        <source src={song} type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default SongTile
