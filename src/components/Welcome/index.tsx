import React from "react";
import "./style.scss";
type Props = {};

function Welcome({}: Props) {
  return (
    <div className="welcome container">
      <div className="left">
        <h1>Your briefing</h1>
        <div className="date">Saturday, December 16</div>
      </div>
      <div className="right">
        <div className="weather">
          <p>Your local weather 5°C</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
