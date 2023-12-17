import React from "react";
import "./style.scss";
import Sun from "../../img/sunImg.png";
type Props = {};
//https://api.weatherapi.com/v1/current.json?key=c6f347ddedc94f69a8a210804231612&q=Baku&aqi=no
function Welcome({}: Props) {
  return (
    <div className="welcome container">
      <div className="left">
        <h1>Your briefing</h1>
        <div className="date">Saturday, December 16</div>
      </div>
      <div className="right">
        <div className="weather">
          <img src={Sun} alt="" />
          <p>Your local weather 5°C</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
