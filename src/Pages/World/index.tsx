import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Earth from "../../img/earth-americas-solid.svg";
type Props = {};

function World({}: Props) {
  return (
    <div className="world container">
      <div className="heading">
        <div className="imgCont">
          <img src={Earth} alt="" />
        </div>
        <h1>World</h1>
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

export default World;
