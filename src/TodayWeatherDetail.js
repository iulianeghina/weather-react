import React from "react";
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
            <div className="col-sm-3 col-6 day-interval">
              <div className="morning">Morning</div>
              <div className="interval-temperature">🌡</div>
              <div className="over-the-day-temperature">15°</div>
            </div>
            <div className="col-sm-3 col-6 day-interval">
              <div className="morning">Midday</div>
              <div className="interval-temperature">🌡</div>
              <div className="over-the-day-temperature">18°</div>
            </div>
            <div className="col-sm-3 col-6 day-interval">
              <div className="morning">Evening</div>
              <div className="interval-temperature">🌡</div>
              <div className="over-the-day-temperature">13°</div>
            </div>
            <div className="col-sm-3 col-6 day-interval">
              <div className="morning">Night</div>
              <div className="interval-temperature">🌡</div>
              <div className="over-the-day-temperature">7°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
