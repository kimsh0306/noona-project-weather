import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7848d4ed5bc3eed817b3c414905bbad5&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7848d4ed5bc3eed817b3c414905bbad5&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "" | city == "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    };
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className='container'>
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton
            city={city}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )
      }
    </div>
  );
}

export default App;
