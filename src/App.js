import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css'

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cityWindSpeed, setCityWindSpeed] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      console.log(data.wind);
      setWeatherData(data.main);
      setCityWindSpeed(data.wind);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const handleClear = () => {
    setCity('');
    setWeatherData(null);
    setCityWindSpeed(null);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
        <button type='reset' onClick={handleClear}>Reset</button>
      </form>
      {weatherData && cityWindSpeed && (
        <WeatherCard
          city={city}
          temperature={weatherData.temp}
          humidity={weatherData.humidity}
          windSpeed={cityWindSpeed.speed}
        />
      )}
    </div>
  );
};

export default App;