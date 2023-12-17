import React from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
type Props = {};

function Details({}: Props) {
  let formattedDate;
  let elem;
  {
    const unixTimestamp = 4098204829480398;
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
    <div className="detailsPage container">
      <div className="cardDetail">
        <img
          src="https://i.ytimg.com/vi/NUvk-y6csSI/maxresdefault.jpg"
          alt=""
        />
        <div className="heading">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            deserunt, incidunt adipisci deleniti similique?
          </p>
        </div>
        <div className="authors">
          <div className="author" key={uuidv4()}>
            Author: Mark Wasowski
          </div>
        </div>
        <div className="details">
          <div className="date detail">{formattedDate}</div>
          <div className="opinions">
            <div className="dislikes detail">
              <img src={Views} alt="" />
              2323223
            </div>
            <div className="views detail like">
              <img src={ThumbUpEmp} alt="" />
              232323
            </div>
            <div className="likes detail dislike">
              <img src={ThumbDownEmp} alt="" />
              233232
            </div>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sint.
          Tempore omnis debitis, expedita itaque dolorem a consectetur quas
          aspernatur sit accusantium! Perspiciatis explicabo deleniti harum
          libero nemo rem quasi voluptatibus ipsa minima quidem alias possimus
          repellendus neque, eligendi impedit tempora animi? Incidunt
          perferendis harum delectus cum omnis quam veritatis suscipit saepe
          quaerat unde blanditiis quisquam nesciunt, soluta molestiae quod,
          totam aspernatur voluptas! Suscipit dignissimos laudantium illo
          quisquam cumque, tenetur vel iusto, ex maxime quae error veniam
          ratione rerum perspiciatis, id ipsa ducimus nemo nulla. Itaque
          similique sint cum architecto saepe aspernatur ipsa temporibus
          voluptates dolorem? Amet earum corporis perferendis.
        </div>
      </div>
    </div>
  );
}

export default Details;
