import React from 'react';
import { Button } from 'react-bootstrap';

const getTemperatureColorClass = (temperature) => {
  if (temperature < 10) {
    return 'blue';
  } else if (temperature >= 10 && temperature < 20) {
    return 'green';
  } else if (temperature >= 20 && temperature < 30) {
    return 'yellow';
  } else {
    return 'red';
  }
};

const WeatherSection = ({ weatherData, specificData, fetchData }) => {
  return (
    <section>
      {weatherData && weatherData.data && weatherData.data.length > 0 ? (
        <ul>
          {weatherData.data.map(data => (
            <li key={data._id}>
              <p className={`temperature ${getTemperatureColorClass(data.temperature)}`}>
                Temperature: {data.temperature.toFixed(1)}°C
              </p>
              {data.detail && (
                <>
                  <p>Weather Type: {data.detail.weather_type}</p>
                  <p>Wind Speed: {data.windspeed} m/s</p>
                  <p>Pressure: {data.detail.pressure} hPa</p>
                  <p>Wind Direction: {data.detail.winddirection}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No weather data available</p>
      )}

      <h2>Specific Weather Data</h2>
      {specificData && (
        <p>{specificData.description}: {specificData.temperature}°C</p>
      )}

      <Button variant="primary" onClick={fetchData}>
        Get Data
      </Button>
    </section>
  );
};

export default WeatherSection;
