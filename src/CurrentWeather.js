import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="currentSpecs">
      <div className="row" id="today">
        <div className="col-6">
          <ul className="currentTemp">
            <li>
              <span role="img" aria-label="partlyCloudy">
                ⛅️
              </span>
              <strong id="temperature">75</strong>
              <span className="unit">˚F</span>
            </li>
            <li id="currentDescription">Cloudy</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="currentSpecs">
            <li>
              High: <span className="currentHigh">88</span>˚
            </li>
            <li>
              Low: <span className="currentLow">67</span>˚
            </li>
            <li>
              Humidity: <span className="currentHumidity">60</span>%
            </li>
            <li>
              Wind speed: <span className="currentWind">6</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
