import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import LocalIcon from "../../img/location-dot-solid.svg";
type Props = {};

function Local({}: Props) {
  return (
    <div className="Local container">
      <div className="heading">
        <div className="imgCont">
          <img src={LocalIcon} alt="" />
        </div>
        <h1>Local</h1>
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

export default Local;
