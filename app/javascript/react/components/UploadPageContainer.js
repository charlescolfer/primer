import React from 'react'

const UploadPageContainer = props => {
  return (
    <div className="row">
          <form className="small-12 medium-9 columns" onSubmit={postNewSong}>
            <h3 className="text-center form-title">New Song Form</h3>
            <h5 className="text-center">{errors.user}</h5>
            <label className="small-12 columns">
              Name: {errors.name}
              <input
                type="text"
                name="name"
                value={newSong.name}
                onChange={handleInputChange}
              />
            </label>

            <label className="small-12 columns">
              Address: {errors.address}
              <input
                type="text"
                name="address"
                value={newSong.address}
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

            <label className="small-12 medium-6 large-4 columns">
              Zip Code: {errors.zip}
              <input
                type="text"
                name="zip"
                value={newSong.zip}
                onChange={handleInputChange}
              />
            </label>

            <label className="small-12 columns">
              Image URL: (Optional)
              <input
                type="text"
                name="image"
                value={newSong.image}
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
