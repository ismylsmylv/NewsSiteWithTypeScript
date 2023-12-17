import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
import CardTemplate from "../CardTemplate";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
type Props = { news: object[] };

function TopStories({ news }: Props) {
  let topCount: num = 0;
  return (
    <div className="topStories container">
      <div className="heading">
        <p> Top stories</p> <img src={ChevronRight} alt="" />
      </div>
      {/* <div className="line"></div> */}

      {/* cards */}

      {news &&
        news.map((elem) => {
          if (elem.category == "topStory" && topCount < 3) {
            topCount++;
            return <CardTemplate elem={elem} key={uuidv4()} />;
          }
        })}
      {/* <CardTemplate />
      <CardTemplate /> */}
    </div>
  );
}

export default TopStories;
