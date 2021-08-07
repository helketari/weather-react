import React from "react";

import "./Link.css";

export default function Link() {
  return (
    <div className="GitHubLink">
      <a
        href="https://github.com/helketari/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Jessica Brosvic
    </div>
  );
}
