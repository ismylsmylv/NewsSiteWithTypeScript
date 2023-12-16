import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import Views from "../../img/eye-regular.svg";
type Props = {};

function TopStories({}: Props) {
  return (
    <div className="topStories">
      <div className="heading">
        <p> Top stories</p> <img src={ChevronRight} alt="" />
      </div>
      <div className="line"></div>

      {/* cards */}
      <div className="card">
        <div className="left">
          <img
            src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6"
            alt=""
          />
          <div className="heading">
            Rudy Giuliani ordered to pay $148 million to Georgia poll workers
          </div>
          <div className="details">
            <div className="date detail">12 november</div>
            <div className="dislikes detail">
              <img src={Views} alt="" /> 500
            </div>
            <div className="views detail like">
              <img src={ThumbUpEmp} alt="" /> 3.5K
            </div>
            <div className="likes detail dislike">
              <img src={ThumbDownEmp} alt="" /> 1K
            </div>
          </div>
        </div>
        <div className="right">
          <div className="authors">
            <div className="author">Nicholas Sparks</div>
            <div className="author">Dan Brown</div>
            <div className="author">James Patterson</div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            recusandae, cumque quae ea libero magni voluptatum praesentium
            voluptas volti placeat commodi sint ea, ex perspiciatis! Libero
            voluptate dolores cupiditate, modi id voluptates nihil fuga
            accusamus.
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="card">
        <div className="left">
          <img
            src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6"
            alt=""
          />
          <div className="heading">
            Rudy Giuliani ordered to pay $148 million to Georgia poll workers
          </div>
          <div className="details">
            <div className="date detail">12 november</div>
            <div className="dislikes detail">
              <img src={Views} alt="" /> 500
            </div>
            <div className="views detail like">
              <img src={ThumbUpEmp} alt="" /> 3.5K
            </div>
            <div className="likes detail dislike">
              <img src={ThumbDownEmp} alt="" /> 1K
            </div>
          </div>
        </div>
        <div className="right">
          <div className="authors">
            <div className="author">Nicholas Sparks</div>
            <div className="author">Dan Brown</div>
            <div className="author">James Patterson</div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            recusandae, cumque quae ea libero magni voluptatum praesentium
            voluptas volti placeat commodi sint ea, ex perspiciatis! Libero
            voluptate dolores cupiditate, modi id voluptates nihil fuga
            accusamus.
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default TopStories;
