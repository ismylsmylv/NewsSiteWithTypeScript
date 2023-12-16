import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid green.svg";
type Props = {};

function LocalNews({}: Props) {
  return (
    <div className="localNews">
      <div className="heading">
        Local News <img src={ChevronRight} alt="" />
      </div>
      <div className="line"></div>
      <div className="cardLocal">
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

      <div className="cardLocal">
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

      <div className="cardLocal">
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

export default LocalNews;
