import React, { useEffect, useState } from 'react'

import NewCommentContainer from './NewCommentContainer'
import CommentIndexContainter from './CommentIndexContainer'

const SongShowContainer = props => {
  const [post, setPost] = useState ({
    song: "",
    title: "",
    art: "",
    description: "",
    daw: ""
  })
  const [errors, setErrors] = useState({})
  const [newComment, setNewComment] = useState({
    body: "",
    songId: songId
  })
  const [shouldRerender, setShouldRerender] = useState(false)
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState({
    messageTest: "",
    refresh: false
  })

  let songId = props.match.params.id

  useEffect(() => {fetch(`/api/v1/songs/${songId}`, {
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
      setPost(body.song)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

    useEffect(() => {fetch(`/api/v1/songs/${songId}/comments`)
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
      setComments(body.comments)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [message])

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["body"]
    requiredFields.forEach(field => {
      if (newComment[field].trim() === "") {
        submitErrors = {
          ...setErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const postComment = props => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch(`/api/v1/songs/${songId}/comments`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(newComment),
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
          setComments([
            ...comments, body]
          )
          setNewComment({
            body: ""
          })
        } else {
          setErrors(body)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const handleInputChange = event => {
    setNewComment({
      ...newComment,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    event.preventDefault()
    setNewComment({
      body: ""
    })
    setErrors({})
  }

  return (
    <div className="entire-page">
      <div className="row">
        <div className="row show-box">
          <div className="columns large-6">
            <img className="album-art" src={post.art}></img>
          </div>
          <div className="daw">
            <h6> Produced in: {post.daw} </h6>
          </div>
          <div className="columns large-6">
            <h3> {post.title} </h3>
            <audio src={post.song.url} type="audio/mpeg" controls className="audio-player-show columns large-9">
            </audio>
          </div>
          <div>
            <div className="description">
              <h6> About: {post.description} </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row comment-organizer">
        <NewCommentContainer
          postComment={postComment}
          errors={errors}
          setErrors={setErrors}
          newComment={newComment}
          setNewComment={setNewComment}
          handleInputChange={handleInputChange}
          clearForm={clearForm}
          songId={songId}
        />

        <CommentIndexContainter
          songId={songId}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </div>
  )
}

export default SongShowContainer
