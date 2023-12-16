import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
type Props = {};

function Beyond({}: Props) {
  return (
    <div className="beyond container">
      <div className="heading">
        Beyond the front page
        <img src={ChevronRight} alt="" />
      </div>
      <div className="info">Notable stories and conversation starters</div>
      <div className="cards">
        <div className="left">
          <div className="card">
            <div className="left">
              <div className="head">
                Third Azerbaijan International Vocal Festival starts in Baku
              </div>
              <div className="footer">
                <div className="date">Yesterday</div>
                <div className="author">Nicholas Sparks</div>
              </div>
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
              <div className="footer">
                <div className="date">Yesterday</div>
                <div className="author">Nicholas Sparks</div>
              </div>
            </div>
            <div className="right">
              <img
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="longLine"></div>
        <div className="right">
          <div className="card">
            <div className="left">
              <div className="head">
                Third Azerbaijan International Vocal Festival starts in Baku
              </div>
              <div className="footer">
                <div className="date">Yesterday</div>
                <div className="author">Nicholas Sparks</div>
              </div>
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
              <div className="footer">
                <div className="date">Yesterday</div>
                <div className="author">Nicholas Sparks</div>
              </div>
            </div>
            <div className="right">
              <img
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beyond;
