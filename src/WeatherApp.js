import "./styles.css";

import TodayWeatherDetail from "./TodayWeatherDetail";
import NextDaysForecast from "./5DaysForecast";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="my-weather-app">
      <div className="app" id="app">
        <div className="container">
          <div className="weather">
            <div className="row">
              <div className="col-8 main-output">
                <form className="search-form" id="search-city">
                  <div className="form-group">
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      placeholder="Enter city"
                      autoFocus="on"
                      id="enter-city"
                    />
                  </div>
                  <div className="search-button">
                    <button
                      type="button"
                      className="btn btn-primary float-right current-button"
                      id="current-location-button"
                    >
                      Current
                    </button>
                  </div>
                </form>
                <div className="info">
                  <div className="row">
                    <div className="col-sm-6 city" id="city">
                      Paris
                    </div>
                    <div className="col-sm-6 icon">
                      <img
                        className="image"
                        id="icon"
                        src="https://openweathermap.org/img/wn/03d@2x.png"
                        alt="cloud"
                      />
                      <ul className="summary">
                        <li className="condition" id="condition">
                          Clouds
                        </li>
                        <li className="temperature">
                          <span id="degrees">18</span> °C
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <TodayWeatherDetail />
              </div>
              <NextDaysForecast />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
