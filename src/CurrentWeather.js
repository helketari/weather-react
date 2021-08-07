import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="currentSpecs">
      <div className="row" id="today">
        <div className="col-6">
          <ul className="currentTemp">
            <li>
              <span role="img" aria-label="Cloudy">
                ☁️
              </span>
              <strong id="temperature">66</strong>
              <span className="unit">˚F</span>
            </li>
            <li id="currentDescription">Cloudy</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="currentSpecs">
            <li>
              High: <span className="currentHigh">72</span>˚
            </li>
            <li>
              Low: <span className="currentLow">57</span>˚
            </li>
            <li>
              Humidity: <span className="currentHumidity">73</span>%
            </li>
            <li>
              Wind speed: <span className="currentWind">10</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
