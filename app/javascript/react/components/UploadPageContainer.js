import React, { useState, useEffect }  from 'react'
import { Redirect } from 'react-router-dom'
import { isEmpty } from 'lodash'

import SongList from './SongList'

const StateArray = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NE', 'NH', 'NJ',  'NM', 'NV', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY' ]

const UploadPageContainer = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [newSong, setNewSong] = useState({
    song: "",
    title: "",
    art: "",
    avatar: "",
    city: "",
    state: ""
  })

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["song", "title", "city", "state"]
    requiredFields.forEach(field => {
      if (newSong[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return isEmpty(submitErrors)
  }

  const postNewSong = () => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch("/api/v1/songs", {
        credentials: 'same-origin',
        method: "POST",
        body: JSON.stringify(newSong),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.id) {
          setShouldRedirect(true)
        } else {
          setErrors(body)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  if (shouldRedirect) {
    return <Redirect to='/songs' />
  }

  const handleInputChange = event => {
    setNewSong({
      ...newSong,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    event.preventDefault()
    setNewSong({
      song: "",
      title: "",
      city: "",
      state: "",
      art: "",
      avatar: ""
    })
    setErrors({})
  }

  const StateOptions = StateArray.map((state) => {
      return (
        <option key={state} name={state}>{state}</option>
      )
    })

  return (
    <div className="row">
      <form className="small-12 medium-9 columns" onSubmit={postNewSong}>
        <h3 className="text-center form-title">New Song Form</h3>
        <h5 className="text-center">{errors.user}</h5>
        <label className="small-12 columns">
          Name: {errors.name}
          <input
            type="text"
            name="song"
            value={newSong.song}
            onChange={handleInputChange}
          />
        </label>

        <label className="small-12 columns">
          Name: {errors.name}
          <input
            type="text"
            name="title"
            value={newSong.title}
            onChange={handleInputChange}
          />
        </label>

        <label className="small-12 medium-12 large-4 columns">
          City: {errors.city}
          <input
            type="text"
            name="city"
            value={newSong.city}
            onChange={handleInputChange}
          />
        </label>

        <label className="small-12 medium-6 large-4 columns">
          State: {errors.state}
          <select name="state" value={newSong.state} onChange={handleInputChange}>
            <option name=""></option>
            {StateOptions}
          </select>
        </label>

        <label className="small-12 columns">
          Image URL: (Optional)
          <input
            type="text"
            name="art"
            value={newSong.art}
            onChange={handleInputChange}
          />
        </label>

        <label className="small-12 columns">
          Image URL: (Optional)
          <input
            type="text"
            name="avatar"
            value={newSong.avatar}
            onChange={handleInputChange}
          />
        </label>

        <div className="text-center">
          <input
            className="button"
            type="submit"
            value="Add Song"
          />
          <button className="button" onClick={clearForm}>Clear</button>
        </div>
      </form>

      <SongsList />
    </div>
  )
}

export default UploadPageContainer
