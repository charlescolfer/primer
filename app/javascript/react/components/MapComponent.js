import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = props => {

  let latitude = 0
  let longitude = 0

  if (props.latitude && props.longitude) {
    latitude = props.latitude
    longitude = props.longitude
  }

  return (
    <div style={{ height: '170px', width: '260px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzXT2_FmvtqelpaiY8MD8ykaCC20RB_vw'}}
        defaultCenter={{
          lat: 42.3601,
          lng: 71.0589
        }}
        center={{lat: latitude, lng: longitude}}
        defaultZoom={11.5}
      >
      </GoogleMapReact>
    </div>
  )
}
export default MapComponent
