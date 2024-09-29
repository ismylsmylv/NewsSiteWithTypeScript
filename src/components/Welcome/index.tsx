import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";

function Welcome() {
  const [weather, setweather] = useState(0);
  const [weatherType, setweatherType] = useState("");
  const [weatherImg, setweatherImg] = useState("");
  useEffect(() => {
    axios(
      "https://api.weatherapi.com/v1/current.json?key=c6f347ddedc94f69a8a210804231612&q=Baku&aqi=no"
    ).then((res) => {
      setweather(res.data.current.temp_c);
      setweatherType(res.data.current.condition.text);
      setweatherImg(res.data.current.condition.icon);
    });
  }, []);

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function welcDateGet(date: Date) {
    const day = date.getDate();
    const dayName = Days[date.getDay()];
    const month = Months[date.getMonth()];

    return `${dayName}, ${month} ${day}`;
  }
  const welcDate = new Date();
  const dataDate = welcDateGet(welcDate);
  return (
    <div className="welcome container">
      <div className="left">
        <h1>Your briefing</h1>

        <div className="date">{dataDate}</div>
      </div>
      <div className="right">
        <a
          href="https://www.accuweather.com/"
          className="weather"
          style={{ color: "white", cursor: "pointer" }}
        >
          <img src={weatherImg} alt="" />
          <p>
            {weatherType} {weather}°C
          </p>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
