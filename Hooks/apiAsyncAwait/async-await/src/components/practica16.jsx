
import React, { use } from 'react'; 


// Async function to fetch weather data
const fetchWeather = async () => {
  const response = await fetch('https://api.weather.com/today');
  if (!response.ok) {
    // throw new Error('Failed to fetch weather');
  }
  return response.json();
};

const WeatherComponent = () => {
  const weather = use(fetchWeather());

  return (
    <div>
      <h1>Today's Weather</h1>
      <p>Temperature: {weather.temperature}°C</p>
    </div>
  );
};

export default WeatherComponent