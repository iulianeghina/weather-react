import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function NextDaysForecast(props) {
  let [forecast, setForecast] = useState(false);
  let [response, setResponse] = useState(null);

  useEffect(() => {
    setForecast(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setResponse(response.data.daily);
    setForecast(true);
  }

  if (forecast) {
    return (
      <div className="col-4">
        <div className="forecast">
          <h5>5-days forecast</h5>
          {response.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <ul
                  className="comming-days-forecast"
                  id="comming-days-forecast"
                  key={index}
                >
                  <WeatherForecastDay data={dailyForecast} />
                </ul>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "faa261b304bfc269bca49770138629cd";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
