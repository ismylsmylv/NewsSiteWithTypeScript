import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import FlaskS from "../../img/flask-solid.svg";
type Props = {};

function Science({}: Props) {
  return (
    <div className="Science container">
      <div className="heading">
        <div className="imgCont">
          <img src={FlaskS} alt="" />
        </div>
        <h1>Science</h1>
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

export default Science;
