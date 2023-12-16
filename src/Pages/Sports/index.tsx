import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Ball from "../../img/table-tennis-paddle-ball-solid.svg";
type Props = {};

function Sport({}: Props) {
  return (
    <div className="Sport container">
      <div className="heading">
        <div className="imgCont">
          <img src={Ball} alt="" />
        </div>
        <h1>Sports</h1>
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

export default Sport;
