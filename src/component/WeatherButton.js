import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({
  getCurrentLocation,
  getOtherLocation,
}) => {
  return (
    <div className='btn'>
      <Button variant="light" onClick={getCurrentLocation}>Current Location</Button>
      <Button variant="light" onClick={() => getOtherLocation("mokpo")}>Mokpo</Button>
      <Button variant="light" onClick={() => getOtherLocation("busan")}>Busan</Button>
    </div>
  )
}

export default WeatherButton
