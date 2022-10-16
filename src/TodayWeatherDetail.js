import React from "react";
import DayIntervalForecast from "./DayIntervalForecast";
import TodayTimeAndDate from "./TodayTimeAndDate";

export default function TodayWeatherDetail(props) {
  return (
    <div className="row">
      <div className="col-10">
        <TodayTimeAndDate timezone={props.timezone} />
        <div className="row">
          <div className="col-6">
            <ul className="min-max">
              <li id="min">min {Math.round(props.min)}°</li>
              <li id="max">max {Math.round(props.max)}°</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="humidity-wind">
              <li id="humidity">humidity {props.humidity}%</li>
              <li id="wind">wind {Math.round(props.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="day-interval-forecast" id="day-interval">
          <div className="row">
            <DayIntervalForecast
              coords={props.coordinates}
              dayMoment="Morning"
            />
            <DayIntervalForecast
              coords={props.coordinates}
              dayMoment="Midday"
            />
            <DayIntervalForecast
              coords={props.coordinates}
              dayMoment="Evening"
            />
            <DayIntervalForecast coords={props.coordinates} dayMoment="Night" />
          </div>
        </div>
      </div>
    </div>
  );
}
