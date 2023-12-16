import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Charts from "../../img/scale-unbalanced-solid.svg";
type Props = {};

function Business({}: Props) {
  return (
    <div
      className="Business
 container"
    >
      <div className="heading">
        <div className="imgCont">
          <img src={Charts} alt="" />
        </div>
        <h1>Business</h1>
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

export default Business;
