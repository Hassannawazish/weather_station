import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/index.css"
import icon from '../images/icons8-wind-turbine.gif'
import rain from '../images/icons8-heavy-rain.gif'
const getTemperatureColorClass = (temperature) => {
  if (temperature < 10) {
    return "blue";
  } else if (temperature >= 10 && temperature < 20) {
    return "green";
  } else if (temperature >= 20 && temperature < 30) {
    return "yellow";
  } else {
    return "red";
  }
};

const WeatherSection = ({ weatherData, specificData, fetchData }) => {
  useEffect(() => {
    // Add a class to trigger the animation after component mount
    const cards = document.querySelectorAll(".animate-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`; // Adjust the delay based on your preference
      card.classList.add("animate-card");
    });
  }, [weatherData]);
  return (
    <section>
      <div className="container">
        <div className="row">
      
     
          {weatherData && weatherData.data && weatherData.data.length > 0 ? (
            <>
            <div className='row'>
            <div className="col-md-1"></div>
                <div className="col-md-2">
                  {weatherData.data.map((data, index) => (
                    <div key={data._id} className="animate-card">
                      <div className="card" style={{ height: "150px", animationDuration: "0.5s" }}>
                        <div className="card-body" style={{ backgroundColor: "red" }}>
                          <h5 className={`card-title temperature ${getTemperatureColorClass(data.temperature)}`}>
                            Temperature: {data.temperature.toFixed(1)}°C
                          </h5>
                          <div className="animate-icon">
                            <i className="bi bi-thermometer" style={{ fontSize: "35px" }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-2">
                  {weatherData.data.map((data) => (
                    <div key={data._id} className="">
                      <div className="card mb-2" style={{ height: "150px" }}>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#ffe4e1" }}
                        >
                          {data.detail && (
                            <>
                              <p className="card-text">
                                Wind Speed:<br/> {data.windspeed} m/s
                              
                              </p>
                              <div className="animate-wind-icon">
                                <img
                                  src={icon} 
                                  alt="Wind Icon"
                                  style={{ width: "2rem", height: "2rem" }}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}</div>
                <div className="col-md-2">
                  {weatherData.data.map((data) => (
                    <div key={data._id} className="">
                      <div className="card mb-2" style={{ height: "150px" }}>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#f0e68c" }}
                        >
                          {data.detail && (
                            <>
                              <p className="card-text">
                                Pressure:<br/> {data.detail.pressure} hPa
                              </p>
                              <i class="bi bi-moisture" style={{ fontSize: "2rem" }}></i>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-2">
                  {weatherData.data.map((data) => (
                    <div key={data._id} className="">
                      <div className="card mb-2" style={{ height: "150px" }}>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#d3d3d3" }}
                        >
                          {data.detail && (
                            <>
                              <p className="card-text">
                                Wind Direction:<br/> {data.detail.winddirection}
                              </p>
                              <i class="bi bi-arrow-up-right" style={{ fontSize: "2rem" }}></i>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-2">
                  {weatherData.data.map((data) => (
                    <div key={data._id} className="">
                      <div className="card mb-2" style={{ height: "150px" }}>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#d3d3d3" }}
                        >
                          {data.detail && (
                            <>
                              <p className="card-text">
                                Weather Type: {data.detail.weather_type}
                              </p>
                              <img
                                src={rain}
                                alt="Wind Icon"
                                style={{ width: "2rem", height: "2rem" }}
                              />
                            </>
                            
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-1"></div>
            </div>
            </>
          ) : (
            <p className="col">No weather data available</p>
          )}
        </div>
      </div>

      <h2>Specific Weather Data</h2>
      {specificData && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {specificData.description}: {specificData.temperature}°C
            </p>
          </div>
        </div>
      )}

      <Button variant="primary" onClick={fetchData}>
        Get Data
      </Button>
    </section>
  );
};

export default WeatherSection;
