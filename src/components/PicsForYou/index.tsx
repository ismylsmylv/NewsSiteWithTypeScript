import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid white.svg";
type Props = {};

function PicsForYou({ news }: Props) {
  let formattedDate;
  return (
    <div className="PicsForYou" style={{ width: "100%" }}>
      <div className="heading">Picks for you</div>
      <div className="line"></div>
      {news &&
        news.map((elem) => {
          {
            const unixTimestamp = elem.date;
            const milliseconds = unixTimestamp * 1000;

            const dateObject = new Date(milliseconds);

            const year = dateObject.getFullYear();
            const month = dateObject.getMonth() + 1;
            const day = dateObject.getDate();
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();

            formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
          }
          if (elem.category == "picked") {
            return (
              <div key={elem.id}>
                <div className="cardPicks">
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="date">{formattedDate}</div>
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
