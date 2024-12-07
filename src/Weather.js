import React, { useState, useEffect } from 'react';
import './Wether.css';

const API_KEY = '9c49ed9a421661ec5fa6285bc1035eb2';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tbilisi");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCity(inputValue);
      setInputValue(""); // Inputni tozalash
    }
  };

  if (!weatherData) return <p>Loading...</p>;

  const currentWeather = weatherData.list[0];
  const hourlyForecast = weatherData.list.slice(0, 10); 
  const dailyForecast = weatherData.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="app">
      <form onSubmit={handleSearch}>
        <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      <div className="weather-main">
        <p>{new Date().toLocaleDateString()}</p>
        <h2>{city}</h2>
        <h1>{Math.round(currentWeather.main.temp)}°C</h1>
        <p>{currentWeather.weather[0].description}</p>
        <p>{currentWeather.wind.speed} km/h</p>
      </div>

      <div className="boxx2">
        {hourlyForecast.map((forecast, index) => (
          <div key={index} className="hourly">
            <p>{new Date(forecast.dt * 1000).getHours()}:00</p>
            <p>{Math.round(forecast.main.temp)}°C</p>
            <p>{forecast.weather[0].main}</p>
          </div>
        ))}
      </div>

      <div className="boxx">
        <h3>The Next Days Forecast</h3>
        {dailyForecast.map((forecast, index) => (
          <div key={index} className="daily">
            <p>{new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: 'long' })}</p>
            <p>{Math.round(forecast.main.temp_min)}° / {Math.round(forecast.main.temp_max)}°C</p>
            <p>{forecast.weather[0].main}</p>
          </div>
        ))}
      </div>
      <div className='block5'></div>
      <div className='text_1'><h1>Heavy Rain</h1></div>
    </div>
  );
}

export default Weather;
