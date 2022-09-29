import React from "react";

export default function TodayWeatherDetail() {
  return (
    <div className="row">
      <div className="col-10">
        <h4 id="today-time">Sunday 13:37</h4>
        <h6 id="actual-date">11/09/2022</h6>
        <div className="row">
          <div className="col-6">
            <ul className="min-max">
              <li id="min">min 7°</li>
              <li id="max">max 18°</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="humidity-wind">
              <li id="humidity">humidity 5%</li>
              <li id="wind">wind 2km/h</li>
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
