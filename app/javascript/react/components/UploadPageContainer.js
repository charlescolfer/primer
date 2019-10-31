import React, { useState, useEffect, useCallback }  from 'react'
import { Redirect } from 'react-router-dom'
import { isEmpty } from 'lodash'
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

import SongList from './SongList'


const UploadPageContainer = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState("")
  const [file, setFile] = useState([])
  const [formData, setFormData] = useState({
    song: "",
    title: "",
    art: ""
  })

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  // debugger;
  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title"]
    requiredFields.forEach(field => {
      if (formData.title[field] && (formData.title[field]).trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return isEmpty(submitErrors)
  }

  const postSong = () => {
    event.preventDefault()
    // debugger
    let body = new FormData()
    body.append("title", formData.title)
    body.append("art", formData.art)
    body.append("song", file[0])
    if (validForSubmission()) {
      fetch("/api/v1/songs.json", {
        credentials: 'same-origin',
        method: "POST",
        body: body
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

  // const onDrop = (file) => {
  //   if(file.length == 1) {
  //     setFormData(file)
  //   } else {
  //     setMessage("You can only upload one song at a time.")
  //   }
  // }

  if (shouldRedirect) {
    return <Redirect to='/songs' />
  }

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }


  const clearForm = event => {
    event.preventDefault()
    setFormData({
      title: "",
      art: ""
    })
    setErrors({})
  }

  return (
    <div className="row form-container">
      <form onSubmit={postSong}>
        <h3 className="form-title">Upload Your Work in Progress</h3>
        <h5 className="text-center">{errors.user}</h5>

          <div className="row form-content">

            <div className="columns large-6">
              <label>
                Title: {errors.name}
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Album Artwork: (Optional)
                <input
                  type="text"
                  name="art"
                  value={formData.art}
                  onChange={handleInputChange}
                />
              </label>

              <div className="text-center buttons">
                <button className="button" type="submit" value="Add Song"> Add Song </button>
                <button className="button" onClick={clearForm}>Clear</button>
              </div>
            </div>


            <div className="columns large-6">
              <section>
                <Dropzone
                  multiple={false}
                  onDrop={file => onDrop(file)}
                >
                  {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Click to upload audio / Drag & Drop your audio here</p>
                    </div>
                  )}
                </Dropzone>
                <aside>
                  <ul>
                    {
                      file.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
                    }
                  </ul>
                </aside>
              </section>
            </div>
          </div>


      </form>
    </div>
  )
}

export default UploadPageContainer
