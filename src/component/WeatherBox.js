import React from 'react'

const WeatherBox = ({ weather }) => {
  const celsius = weather?.main.temp;
  const fahrenheit = celsius * 1.8 + 32;
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{celsius}C</h2>
      <h2>{weather?fahrenheit:""}F</h2>
      <p>{weather?.weather[0].description}</p>
    </div>
  );
};

export default WeatherBox
