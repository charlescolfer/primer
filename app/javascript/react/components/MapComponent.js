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
    <div style={{ height: '150px', width: '250px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzXT2_FmvtqelpaiY8MD8ykaCC20RB_vw'}}
        defaultCenter={{
          lat: 55,
          lng: 55
        }}
        center={{lat: latitude, lng: longitude}}
        defaultZoom={10}
      >
      </GoogleMapReact>
    </div>
  )
}
export default MapComponent
