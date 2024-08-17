import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useCallback } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

const locationData = {
  mokpo: { lat: 34.8026707, lon: 126.3890790 },
  busan: { lat: 35.1766073, lon: 129.0723681 },
};

function App() {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("lat: ", lat, ", lon: ", lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7848d4ed5bc3eed817b3c414905bbad5&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data)
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getOtherLocation = (location) => {
    getWeatherByCurrentLocation(locationData[location].lat, locationData[location].lon);
  };

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton
          getCurrentLocation={getCurrentLocation}
          getOtherLocation={getOtherLocation}
        />
      </div>
    </div>
  );
}

export default App;
