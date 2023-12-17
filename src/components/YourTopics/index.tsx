import React from "react";
import ChevronRight from "../../img/chevron-right-solid.svg";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { Link } from "react-router-dom";
type Props = { news: object[] };
let entCount: number = 0;
let techCount: number = 0;
let sciCount: number = 0;
let busCount: number = 0;
let spoCount: number = 0;
let helCount: number = 0;

function YourTopics({ news }: Props) {
  let formattedDate;

  return (
    <div className="YourTopics container">
      <div className="catHeading">Your topics</div>
      <div className="info">Recommended based on your interests</div>
      <div className="categories">
        {/* 1 */}
        <div className="category">
          <Link
            to={"entertainment"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Entertainment <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>

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
                console.log(formattedDate);
              }
              if (elem.topic == "entertainment" && entCount < 3) {
                entCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* divider */}
        {/* 2 */}
        <div className="category">
          <Link
            to={"tech"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Technology <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>
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
                console.log(formattedDate);
              }
              if (elem.topic == "technology" && techCount < 3) {
                techCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* 3 */}
        <div className="category">
          <Link
            to={"science"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Science <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>
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
                console.log(formattedDate);
              }
              if (elem.topic == "science" && sciCount < 3) {
                sciCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* 4 */}
        <div className="category">
          <Link
            to={"business"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Business <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>
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
                console.log(formattedDate);
              }
              if (elem.topic == "business" && busCount < 3) {
                busCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* 5 */}
        <div className="category">
          <Link
            to={"sport"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Sports <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>
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
                console.log(formattedDate);
              }
              if (elem.topic == "sports" && spoCount < 3) {
                spoCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* 6 */}
        <div className="category">
          <Link
            to={"health"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {" "}
            <div className="heading">
              Health <img src={ChevronRight} alt="" />{" "}
            </div>
          </Link>

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
                console.log(formattedDate);
              }
              if (elem.topic == "health" && helCount < 3) {
                helCount++;
                return (
                  <div key={uuidv4()}>
                    <div className="line"></div>
                    <div className="card">
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDate}</div>
                      </div>
                      <div className="right">
                        <img src={elem?.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default YourTopics;
