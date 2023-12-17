import React, { useState } from "react";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import { like, dislike } from "../../redux/slices/connectSlice";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
import { useAppDispatch } from "../../redux/hooks/hooks";
type Props = { elem: object[] };

function Details({}: Props) {
  const dispatch = useAppDispatch();
  let elem = {
    title: "Global Leaders Unite for Climate Accord in Landmark Summit",
    text: " World leaders convened in a historic summit to address the escalating climate crisis, pledging unprecedented commitments to reduce carbon emissions and transition to sustainable practices.",
    category: "world",
    likes: 58,
    dislikes: 29,
    views: 29,
    date: 1702822668,
    authors: "Michael Smith",
    topic: "topStory",
    id: 2,
    image:
      "https://www.unicefusa.org/sites/default/files/field-images/story-banner/2021/Advocacy%20Week%20Bkg.jpg",
  };
  const [likes, setlikes] = useState(elem.likes);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(elem.dislikes);
  const [disliked, setdisliked] = useState(false);
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
    <div className="detailsPage container">
      <div className="cardDetail">
        <img src={elem.image} alt="" />
        <div className="heading">
          <p>{elem.title}</p>
        </div>
        <div className="authors">
          <div className="author" key={uuidv4()}>
            Author: {elem.authors}
          </div>
        </div>
        <div className="details">
          <div className="date detail">{formattedDate}</div>
          <div className="opinions">
            <div className="dislikes detail">
              <img src={Views} alt="" style={{ width: "auto" }} />
              {elem.views}
            </div>
            <div
              className="views detail like"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(like(elem));
                let liked = elem.likes;
                setlikes(liked + 1);
                setliked(true);
                setdisliked(false);
              }}
            >
              <img src={liked ? ThumbUpFill : ThumbUpEmp} alt="" />
              {likes}
            </div>
            <div
              className="likes detail dislike"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(dislike(elem));
                let disliked = elem.dislikes;
                setdislikes(disliked - 1);
                setdisliked(true);
                setliked(false);
              }}
            >
              <img src={disliked ? ThumbDownFill : ThumbDownEmp} alt="" />
              {dislikes}
            </div>
          </div>
        </div>

        <div className="content">{elem.text}</div>
      </div>
    </div>
  );
}

export default Details;
