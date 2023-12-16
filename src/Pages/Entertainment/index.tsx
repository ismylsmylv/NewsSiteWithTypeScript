import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Masks from "../../img/masks-theater-solid.svg";
type Props = {};

function Entertainment({}: Props) {
  return (
    <div className="Entertainment container">
      <div className="heading">
        <div className="imgCont">
          <img src={Masks} alt="" />
        </div>
        <h1>Entertainment</h1>
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

export default Entertainment;
