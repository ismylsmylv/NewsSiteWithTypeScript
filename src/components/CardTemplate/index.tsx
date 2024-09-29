import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IdNews } from "../../assets/types/news";
import { formatDate, removeTags } from "../../utils/functions.js";
import "./style.scss";
type Props = {
  elem: IdNews;
};

function CardTemplate({ elem }: Props) {
  const navigate = useNavigate();
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
            <div className="date detail">{formatDate(elem?.date)}</div>
            <div className="dislikes detail">
              <FaRegEye size={20} />
              {elem.views ?? 0}
            </div>
            <div className="views detail like">
              <BiLike size={20} />
              {elem.likes ?? 0}
            </div>
            <div className="likes detail dislike">
              <BiDislike size={20} />
              {elem.dislikes ?? 0}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="authors">
            <div className="author" key={uuidv4()}>
              {elem.authors}
            </div>
          </div>
          <div className="content">{removeTags(elem.text)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
