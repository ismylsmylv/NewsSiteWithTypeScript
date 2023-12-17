import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
type Props = {};

function Beyond({}: Props) {
  const url =
    "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/How-to-Find-Out-Where-a-Picture-Was-Taken-1.png?fit=1200%2C675&ssl=1";
  return (
    <div className="beyond container">
      <div className="heading">
        Beyond the front page
        <img src={ChevronRight} alt="" />
      </div>
      <div className="info">Notable stories and conversation starters</div>
      <div
        className="cardsBeyond"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="darkOverlay"></div>
        <div className="cardBeyond">
          <div className="left">
            <div className="head">
              Third Azerbaijan International Vocal Festival starts in Baku
            </div>
            <div className="footer">
              <div className="date">Yesterday</div>
              <div className="author">Nicholas Sparks</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cardsBeyond"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="darkOverlay"></div>
        <div className="cardBeyond">
          <div className="left">
            <div className="head">
              Third Azerbaijan International Vocal Festival starts in Baku
            </div>
            <div className="footer">
              <div className="date">Yesterday</div>
              <div className="author">Nicholas Sparks</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cardsBeyond"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="darkOverlay"></div>
        <div className="cardBeyond">
          <div className="left">
            <div className="head">
              Third Azerbaijan International Vocal Festival starts in Baku
            </div>
            <div className="footer">
              <div className="date">Yesterday</div>
              <div className="author">Nicholas Sparks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beyond;
