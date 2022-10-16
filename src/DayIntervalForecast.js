import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DayIntervalForecast(props) {
  let [dataApi, setDataApi] = useState(false);
  let [response, setResponse] = useState(null);

useEffect (() => {
    setDataApi(false)},
    [props.coords]);


  function handleResponse(response) {
    setDataApi(true);
    setResponse(response.data.daily[0]);
  }

  function moment() {
    if (props.dayMoment === "Morning") {
      return Math.round(response.temp.morn);
    } else if (props.dayMoment === "Midday") {
      return Math.round(response.temp.day);
    } else if (props.dayMoment === "Evening") {
      return Math.round(response.temp.eve);
    } else {
      return Math.round(response.temp.night);
    }
  }

  if (dataApi) {
    return (
      <div className="col-sm-3 col-6 day-interval">
        <div className="morning">{props.dayMoment}</div>
        <div className="interval-temperature">🌡</div>
        <div className="over-the-day-temperature">{moment()}°</div>
      </div>
    );
  } else {
    let apiKey = "faa261b304bfc269bca49770138629cd";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
