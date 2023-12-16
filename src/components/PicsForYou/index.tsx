import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid white.svg";
type Props = {};

function PicsForYou({}: Props) {
  return (
    <div className="PicsForYou">
      <div className="heading">Picks for you</div>
      <div className="line"></div>
      <div className="card">
        <div className="left">
          <div className="head">
            Third Azerbaijan International Vocal Festival starts in Baku
          </div>
          <div className="date">Yesterday</div>
        </div>
        <div className="right">
          <img
            src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="line"></div>

      <div className="card">
        <div className="left">
          <div className="head">
            Third Azerbaijan International Vocal Festival starts in Baku
          </div>
          <div className="date">Yesterday</div>
        </div>
        <div className="right">
          <img
            src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="line"></div>

      <div className="card">
        <div className="left">
          <div className="head">
            Third Azerbaijan International Vocal Festival starts in Baku
          </div>
          <div className="date">Yesterday</div>
        </div>
        <div className="right">
          <img
            src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PicsForYou;
