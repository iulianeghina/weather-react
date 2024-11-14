import React, { useState } from "react";
import axios from "axios";
import TodayWeatherDetail from "./TodayWeatherDetail";
import NextDaysForecast from "./NextDaysForecast";
import Footer from "./Footer";
import WeatherIcon from "./WeatherIcon";
import WeatherSummary from "./WeatherSummary";

export default function WeatherApp(props) {
  const [weatherResponse, setWeatherResponse] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleRequest(response) {
    setWeatherResponse({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      timezone: response.data.timezone,
    });
  }

  function search(city) {
    const apiKey = "faa261b304bfc269bca49770138629cd";
    const apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRequest);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherResponse.ready) {
    return (
      <div className="my-weather-app">
        <div className="app" id="app">
          <div className="container">
            <div className="weather">
              <div className="row">
                <div className="col-8 main-output">
                  <form
                    className="search-form"
                    id="search-city"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="Enter city"
                        autoFocus="on"
                        id="enter-city"
                        onChange={handleCityChange}
                      />
                    </div>
                    <div className="search-button">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary float-right search-city-button"
                        id="search-button"
                      />
                    </div>
                  </form>
                  <div className="info">
                    <div className="row">
                      <div className="col-sm-6 city" id="city">
                        {weatherResponse.city}
                      </div>
                      <div className="col-sm-6 icon">
                        <WeatherIcon code={weatherResponse.icon} size={64} />
                        <WeatherSummary
                          celsius={weatherResponse.temperature}
                          description={weatherResponse.description}
                        />
                      </div>
                    </div>
                  </div>
                  <TodayWeatherDetail
                    min={weatherResponse.minTemp}
                    max={weatherResponse.maxTemp}
                    humidity={weatherResponse.humidity}
                    wind={weatherResponse.wind}
                    timezone={weatherResponse.timezone}
                    coordinates={weatherResponse.coordinates}
                  />
                </div>
                <NextDaysForecast coordinates={weatherResponse.coordinates} />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search(city);
    return <h1>Loading...</h1>;
  }
}
