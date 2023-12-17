import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import Views from "../../img/eye-regular.svg";
type Props = { elem: object[] };

function CardTemplate({ elem }: Props) {
  return (
    <div className="CardTemplate">
      <div className="card">
        <div className="left">
          <img
            src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6"
            alt=""
          />
          <div className="heading">
            <p>{elem.title}</p>
          </div>
          <div className="details">
            <div className="date detail">{elem.date}</div>
            <div className="dislikes detail">
              <img src={Views} alt="" />
              {elem.views}
            </div>
            <div className="views detail like">
              <img src={ThumbUpEmp} alt="" />
              {elem.likes}
            </div>
            <div className="likes detail dislike">
              <img src={ThumbDownEmp} alt="" />
              {elem.dislikes}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="authors">
            <div className="author">Nicholas Sparks</div>
            <div className="author">Dan Brown</div>
            <div className="author">James Patterson</div>
          </div>
          <div className="content">{elem.text}</div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default CardTemplate;
