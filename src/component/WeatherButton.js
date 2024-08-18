import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({
  city,
  cities,
  setCity,
}) => {
  return (
    <div className='btn'>
      <Button
        variant={city === "current" ? "secondary" : 'light'}
        onClick={() => setCity("current")}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={city === item ? "secondary" : 'light'}
          key={`${item}-${index}`}
          onClick={() => setCity(item)}
        >{item}</Button>
      ))}
    </div>
  );
};

export default WeatherButton
