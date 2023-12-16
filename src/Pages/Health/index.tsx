import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Flask from "../../img/heart-pulse-solid.svg";
type Props = {};

function Health({}: Props) {
  return (
    <div className="Health container">
      <div className="heading">
        <div className="imgCont">
          <img src={Flask} alt="" />
        </div>
        <h1>Health</h1>
      </div>
      <div className="cards ">
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
      </div>
    </div>
  );
}

export default Health;
