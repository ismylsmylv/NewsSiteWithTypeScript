import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid green.svg";
type Props = {};

function LocalNews({ news }: Props) {
  return (
    <div className="localNews" style={{ width: "100%" }}>
      <div className="heading">
        Local News <img src={ChevronRight} alt="" />
      </div>
      <div className="line"></div>
      {news &&
        news.map((elem) => {
          if (elem.category == "local") {
            return (
              <div key={elem.id}>
                <div className="cardLocal">
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

export default LocalNews;
