import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form className="citySearchForm">
        <input
          type="text"
          className="city-input"
          placeholder="Enter location"
        />
        <input type="submit" value="Search" />
      </form>
      <button className="gpsSearchForm">Use current location</button>
    </div>
  );
}
