import { useEffect, useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { v4 as uuidv4 } from "uuid";
import CardTemplate from "../../components/CardTemplate/index.tsx";
import Loader from "../../components/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { dislike, getId, like, view } from "../../redux/slices/connectSlice";
import { formatDate } from "../../utils/functions.ts";
import "./style.scss";

function Details() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const idNews = useAppSelector((state) => state.connect.idNews);
  const loading = useAppSelector((state) => state.connect.loading);
  const news = useAppSelector((state) => state.connect.news);

  useEffect(() => {
    dispatch(getId(id));
    setlikes(idNews.likes);
    setdislikes(idNews.dislikes);
    setTimeout(() => {
      dispatch(view(idNews));
    }, 1000);
  }, [dispatch, id, idNews.dislikes, idNews.likes]);
  const [likes, setlikes] = useState(idNews.likes ?? 0);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(idNews.dislikes ?? 0);
  const [disliked, setdisliked] = useState(false);
  const [isShare, setIsShared] = useState(false);

  return (
    <>
      <div className="detailsPage container">
        {loading && <Loader />}

        <Tooltip id="like" />
        <Tooltip id="share" />
        <Tooltip id="dislike" />
        <Tooltip id="views" />
        <div className="cardDetail">
          <img src={idNews.image} alt="" />
          <div className="heading">
            <h1>{idNews.title}</h1>

            <IoMdShare
              size={30}
              data-tooltip-id="share"
              data-tooltip-content={
                isShare ? "Copied to clipboard" : "Share this news"
              }
              style={{ cursor: "pointer", outline: "none" }}
              onClick={() => {
                setIsShared(true);
                navigator.clipboard.writeText(
                  import.meta.env.VITE_APP_BASE_URL + "/details/" + idNews.id
                );
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  setIsShared(false);
                }, 200);
              }}
            />
          </div>
          <div className="details">
            <div className="left">
              <p className="author" key={uuidv4()}>
                Author: {idNews.authors}
              </p>
              <div className="date">{formatDate(idNews.date)} </div>
            </div>
            <div className="right">
              <div
                className="views detail"
                data-tooltip-id="views"
                data-tooltip-content={`Viewed ${idNews.views ?? 1} times`}
              >
                <FaRegEye size={20} />
                {idNews.views ?? 1}
              </div>
              <div
                data-tooltip-id="like"
                data-tooltip-content={disliked ? "Liked" : "Like"}
                className="likes detail like"
                onClick={(e) => {
                  e.stopPropagation();
                  const liked = idNews.likes ?? 0;
                  dispatch(like(idNews));
                  setlikes(liked + 1);
                  setliked(true);
                  setdisliked(false);
                }}
              >
                {liked ? <BiSolidLike size={20} /> : <BiLike size={20} />}
                {likes}
              </div>
              <div
                data-tooltip-id="dislike"
                data-tooltip-content={disliked ? "Disliked" : "Dislike"}
                className="dislikes detail dislike"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(dislike(idNews));
                  const disliked = idNews.dislikes ?? 0;
                  setdislikes(disliked + 1);
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
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: idNews.text }}
          ></div>
        </div>
        <div className="similar container">
          <h2>Similar news</h2>
          {news?.map((elem) => {
            return (
              elem.category == idNews?.category &&
              elem.id != idNews?.id && <CardTemplate elem={elem} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Details;
