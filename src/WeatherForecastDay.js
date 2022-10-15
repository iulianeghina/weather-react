import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }
  return (
    <li>
      <span className="days-forecast">{day()}</span>
      <div className="forecast-temp">
        <WeatherIcon code={props.data.weather[0].icon} size={28} />
        <span className="forecast-max-temp">
          {" "}
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        /{" "}
        <span className="forecast-min-temp">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </li>
  );
}
