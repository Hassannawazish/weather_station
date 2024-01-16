import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import WeatherSection from './components/weather';

const backendUrl = "http://localhost:5050";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [specificData, setSpecificData] = useState(null);

  const fetchData = () => {
    axios.get(`${backendUrl}/weather_data`)
      .then(response => {
        // console.log('Weather Data Response:', response);
        const dataArray = response.data;
        console.log("Array", dataArray);
        setWeatherData(dataArray);
        console.log(weatherData)
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container className="mt-4">
        <WeatherSection
          weatherData={weatherData}
          specificData={specificData}
          fetchData={fetchData}
        />
        <Welcome />
      </Container>
    </div>
  );
};

export default App;
