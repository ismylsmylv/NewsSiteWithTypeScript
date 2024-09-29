import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { IdNews } from "../../assets/types/news";
import Views from "../../img/eye-regular.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { dislike, like } from "../../redux/slices/connectSlice";
import "./style.scss";
import { FaRegEye } from "react-icons/fa";
type Props = {
  elem: IdNews;
};

function CardTemplate({ elem }: Props) {
  const navigate = useNavigate();
  let formattedDate;
  const [likes, setlikes] = useState(elem.likes);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(elem.dislikes);
  const [disliked, setdisliked] = useState(false);
  const dispatch = useAppDispatch();
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
  }
  return (
    <div className="CardTemplate">
      <div className="line"></div>

      <div
        className="card"
        onClick={() => {
          navigate(`/details/${elem.id}`);
        }}
      >
        <div className="left">
          <img src={elem.image} alt="" />
          <h2 className="heading">{elem.title}</h2>
          <div className="details">
            <div className="date detail">{formattedDate}</div>
            <div className="dislikes detail">
              <FaRegEye size={20} />
              {elem.views ?? 0}
            </div>
            <div
              className="views detail like"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(like(elem));
                const liked = elem.likes;
                setlikes(liked + 1);
                setliked(true);
                setdisliked(false);
              }}
            >
              <BiLike size={20} />
              {likes ?? 0}
            </div>
            <div
              className="likes detail dislike"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(dislike(elem));
                const disliked = elem.dislikes;
                setdislikes(disliked - 1);
                setdisliked(true);
                setliked(false);
              }}
            >
              <BiDislike size={20} />
              {dislikes ?? 0}
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
