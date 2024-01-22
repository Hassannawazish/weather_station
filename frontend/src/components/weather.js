import React from "react";
import { Button } from "react-bootstrap";

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
  return (
    <section>
      <div className="container">
        <div className="row">
          {weatherData && weatherData.data && weatherData.data.length > 0 ? (
            <>
              {weatherData.data.map((data) => (
                <div key={data._id} className="col-md-3">
                  <div className="card mb-3" style={{ height: "100%" }}>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f0f8ff" }}
                    >
                      <h5
                        className={`card-title temperature ${getTemperatureColorClass(
                          data.temperature
                        )}`}
                      >
                        Temperature: {data.temperature.toFixed(1)}°C
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
              {weatherData.data.map((data) => (
                <div key={data._id} className="col-md-3">
                  <div className="card mb-3" style={{ height: "100%" }}>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#ffe4e1" }}
                    >
                      {data.detail && (
                        <>
                          <p className="card-text">
                            Wind Speed: {data.windspeed} m/s
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {weatherData.data.map((data) => (
                <div key={data._id} className="col-md-3">
                  <div className="card mb-3" style={{ height: "100%" }}>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f0e68c" }}
                    >
                      {data.detail && (
                        <>
                          <p className="card-text">
                            Pressure: {data.detail.pressure} hPa
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {weatherData.data.map((data) => (
                <div key={data._id} className="col-md-3">
                  <div className="card mb-3" style={{ height: "100%" }}>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#d3d3d3" }}
                    >
                      {data.detail && (
                        <>
                          <p className="card-text">
                            Wind Direction: {data.detail.winddirection}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {weatherData.data.map((data) => (
                <div key={data._id} className="col-md-3">
                  <div className="card mb-3" style={{ height: "100%" }}>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#d3d3d3" }}
                    >
                      {data.detail && (
                        <>
                          <p className="card-text">
                            Weather Type: {data.detail.weather_type}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
