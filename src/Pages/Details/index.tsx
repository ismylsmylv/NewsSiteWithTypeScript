import { useEffect, useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { dislike, getId, like } from "../../redux/slices/connectSlice";
import "./style.scss";

function Details() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const idNews = useAppSelector((state) => state.connect.idNews);

  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);
  const [likes, setlikes] = useState(idNews.likes);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(idNews.dislikes);
  const [disliked, setdisliked] = useState(false);

  const unixTimestamp = idNews.date;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
  return (
    <div className="detailsPage container">
      <div className="cardDetail">
        <img src={idNews.image} alt="" />
        <div className="heading">
          <h1>{idNews.title}</h1>
        </div>
        <div className="details">
          <div className="left">
            <p className="author" key={uuidv4()}>
              Author: {idNews.authors}
            </p>
            <div className="date">{formattedDate}</div>
          </div>
          <div className="right">
            <div className="views detail">
              <FaRegEye size={20} />
              {idNews.views}
            </div>
            <div
              className="likes detail like"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(like(idNews));
                const liked = idNews.likes;
                setlikes(liked + 1);
                setliked(true);
                setdisliked(false);
              }}
            >
              {liked ? <BiSolidLike size={20} /> : <BiLike size={20} />}
              {likes}
            </div>
            <div
              className="dislikes detail dislike"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(dislike(idNews));
                const disliked = idNews.dislikes;
                setdislikes(disliked - 1);
                setdisliked(true);
                setliked(false);
              }}
            >
              {disliked ? (
                <BiSolidDislike size={20} />
              ) : (
                <BiDislike size={20} />
              )}
              {dislikes}
            </div>
          </div>
        </div>
        <div className="content">{idNews.text}</div>
      </div>
    </div>
  );
}

export default Details;
