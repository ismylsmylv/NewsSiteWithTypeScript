import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid white.svg";
type Props = {};

function PicsForYou({ news }: Props) {
  return (
    <div className="PicsForYou" style={{ width: "100%" }}>
      <div className="heading">Picks for you</div>
      <div className="line"></div>
      {news &&
        news.map((elem) => {
          if (elem.category == "picked") {
            return (
              <div div key={elem.id}>
                <div className="cardPicks">
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="date">{elem.date}</div>
                  </div>
                  <div className="right">
                    <img
                      src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="line"></div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default PicsForYou;
