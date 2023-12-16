import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Chip from "../../img/microchip-solid.svg";
type Props = {};

function Tech({}: Props) {
  return (
    <div className="Tech container">
      <div className="heading">
        <div className="imgCont">
          <img src={Chip} alt="" />
        </div>
        <h1>Tech</h1>
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

export default Tech;
