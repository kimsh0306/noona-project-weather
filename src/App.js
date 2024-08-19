import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

const cities = ['paris', 'new york', 'tokyo', 'seoul'];

function App() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState("");

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7848d4ed5bc3eed817b3c414905bbad5&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    };
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7848d4ed5bc3eed817b3c414905bbad5&units=metric`
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
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
      ) : !apiError ? (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton
            city={city}
            cities={cities}
            setCity={setCity}
          />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
