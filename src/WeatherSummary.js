import React, { useState } from "react";

export default function WeatherSummary(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <ul className="summary">
          <li className="condition text-capitalize" id="condition">
            {props.description}
          </li>
          <li className="temperature">
            <span id="degrees">
              {Math.round(props.celsius)}
              <span className="unit">
                °C|
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <ul className="summary">
          <li className="condition text-capitalize" id="condition">
            {props.description}
          </li>
          <li className="temperature">
            <span id="degrees">
              {Math.round(fahrenheit)}
              <span className="unit">
                <a href="/" onClick={showCelsius}>
                  °C
                </a>
                | °F
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
