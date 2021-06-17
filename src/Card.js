import React from 'react'
import './Card.css'

function Card({ obj }) {
  return (
    <div className='card'>
      <div className='header'>
        <h2>
          {obj.location}/ <h6>LoactionID : {obj.locationId}</h6>
        </h2>
      </div>
      <div className='perameters'>
        <h1>
          {obj.parameter} level : {obj.value}/
        </h1>
        <p>{obj.unit}</p>
      </div>
      <div className='moreitems'>
        <h3>sensorType : {obj.sensorType}</h3>
        <h4>isMobile : {obj.isMobile ? 'true' : 'false'}</h4>
        <h4>isAnalysis : {obj.isAnalysis ? 'true' : 'false'}</h4>
        <h4>entity : {obj.entity}</h4>
      </div>
      <div className='coordinates'>
        {obj.coordinates && <h5>latitude : {obj.coordinates.latitude}</h5>}
        {obj.coordinates && <h5>longitude : {obj.coordinates.longitude}</h5>}
      </div>
    </div>
  )
}

export default Card
