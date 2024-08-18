import React from 'react'

const WeatherBox = ({ weather }) => {
  const tempData = weather ? Math.floor(weather.main.temp) : "";
  const celsius = weather ? `${tempData}C` : "";
  const fahrenheit = weather ? `${Math.floor(tempData * 1.8 + 32)}F` : "";
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{celsius}</h2>
      <h2>{fahrenheit}</h2>
      <p>{weather?.weather[0].description}</p>
    </div>
  );
};

export default WeatherBox
