import React from 'react';

const WeatherCard = ({ city, temperature, humidity, windSpeed }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className='cards-wrapper'>
        <div className='card'>
          <h3>Temperature: {temperature}°C</h3>
        </div>
        <div className='card'><h3>Humidity: {humidity}%</h3></div>
        <div className='card'><h3>Wind Speed: {windSpeed} m/s</h3></div>
      </div>
    </div>
  );
};

export default WeatherCard;