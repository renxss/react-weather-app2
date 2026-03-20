import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://th.bing.com/th/id/OBWA.v6-106-png-n300?w=72&amp;h=72&amp;c=6&amp;o=6&amp;dpr=1.3&amp;pid=Weatherhttps://th.bing.com/th/id/OBWA.v6-106-png-n300?w=72&amp;h=72&amp;c=6&amp;o=6&amp;dpr=1.3&amp;pid=Weather`,
      wind: Math.round(response.data.wind.speed * 3.6),
      city: response.data.name,
    });
  }

  if (weatherData && weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  height="64px"
                  width="64px"
                />
                <div>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "21b0d521c54b5a7cbc3b4d1148791850";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
