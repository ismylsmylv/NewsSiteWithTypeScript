import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
type Props = { elem: object[] };

function CardTemplate({ elem }: Props) {
  let formattedDate;

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
    // console.log(formattedDate);
  }
  return (
    <div className="CardTemplate">
      <div className="line"></div>

      <div className="card">
        <div className="left">
          <img src={elem.image} alt="" />
          <div className="heading">
            <p>{elem.title}</p>
          </div>
          <div className="details">
            <div className="date detail">{formattedDate}</div>
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
            {/* {?.map((auth) => {
              return ( */}
            <div className="author" key={uuidv4()}>
              {elem.authors}
            </div>
            {/* ); */}
            {/* })} */}
          </div>
          <div className="content">{elem.text}</div>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
