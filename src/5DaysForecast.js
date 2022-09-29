import React from "react";

export default function NextDaysForecast() {
  return (
    <div className="col-4">
      <div className="forecast">
        <h5>5-days forecast</h5>
        <ul className="comming-days-forecast" id="comming-days-forecast">
          <li>
            <span className="days-forecast">Monday</span>
            <div className="forecast-temp">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="broken clouds"
                width="35px"
              />
              <span className="forecast-max-temp">20°</span>
              "/"
              <span className="forecast-min-temp">14°</span>
            </div>
          </li>
          <li>
            <span className="days-forecast">Thusday</span>
            <div className="forecast-temp">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="broken clouds"
                width="35px"
              />
              <span className="forecast-max-temp">22°</span>
              "/"
              <span className="forecast-min-temp">15°</span>
            </div>
          </li>
          <li>
            <span className="days-forecast">Wednesday</span>
            <div className="forecast-temp">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="broken clouds"
                width="35px"
              />
              <span className="forecast-max-temp">19°</span>
              "/"
              <span className="forecast-min-temp">12°</span>
            </div>
          </li>
          <li>
            <span className="days-forecast">Thursday</span>
            <div className="forecast-temp">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="broken clouds"
                width="35px"
              />
              <span className="forecast-max-temp">21°</span>
              "/"
              <span className="forecast-min-temp">17°</span>
            </div>
          </li>
          <li>
            <span className="days-forecast">Friday</span>
            <div className="forecast-temp">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="broken clouds"
                width="35px"
              />
              <span className="forecast-max-temp">20°</span>
              "/"
              <span className="forecast-min-temp">16°</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
