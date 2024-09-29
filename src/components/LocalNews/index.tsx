import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IdNews } from "../../assets/types/news";
import ChevronRight from "../../img/chevron-right-solid green.svg";
import { formatDate } from "../../utils/functions.js";
import "./style.scss";
type Props = {
  news: IdNews[];
};

function LocalNews({ news }: Props) {
  let localCount: number = 0;
  const navigate = useNavigate();
  return (
    <div className="localNews" style={{ width: "100%" }}>
      <div
        className="heading"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/local");
        }}
      >
        Local News <img src={ChevronRight} alt="" />
      </div>
      {news &&
        news.map((elem) => {
          if (elem.category == "local" && localCount < 3) {
            localCount++;
            return (
              <div key={uuidv4()}>
                <div className="line"></div>

                <div
                  className="cardLocal"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/details/${elem.id}`);
                  }}
                >
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="date">{formatDate(elem.date)}</div>
                  </div>
                  <div className="right">
                    <img src={elem.image} alt="" />
                  </div>
                </div>
                {/* <div className="line"></div> */}
              </div>
            );
          }
        })}
    </div>
  );
}

export default LocalNews;
