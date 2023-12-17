import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import Views from "../../img/eye-regular.svg";
import CardTemplate from "../CardTemplate";
type Props = {};

function TopStories({}: Props) {
  return (
    <div className="topStories container">
      <div className="heading">
        <p> Top stories</p> <img src={ChevronRight} alt="" />
      </div>
      <div className="line"></div>

      {/* cards */}
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
    </div>
  );
}

export default TopStories;
