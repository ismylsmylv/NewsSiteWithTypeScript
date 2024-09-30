import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IdNews } from "../../assets/types/news";
import "./style.scss";
import { formatDate } from "../../utils/functions.ts";
type Props = { news: IdNews[] };

function ForYou({ news }: Props) {
  const navigate = useNavigate();
  const pickCount: number = 0;
  let pickCountLeft: number = 0;
  let pickCountRight: number = 0;

  return (
    <div className="forYou container">
      <div className="heading">For you</div>
      {/* <img src={ChevronRight} alt="" /> */}
      <div className="info">Recommended based on your interests</div>

      <div className="cards">
        <div className="left">
          {news &&
            news.map((elem) => {
              if (
                elem.topic == "picked" &&
                pickCountLeft < 3 &&
                pickCount < 3
              ) {
                pickCountLeft++;
                return (
                  <div key={uuidv4()}>
                    <div
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/details/${elem.id}`);
                      }}
                    >
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formatDate(elem?.date)}</div>
                      </div>
                      <div className="right">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                );
              }
            })}
        </div>
        <div className="longLine"></div>
        <div className="right">
          {news &&
            news.map((elem) => {
              if (elem.topic != "picked" && pickCountRight < 3) {
                pickCountRight++;
                return (
                  <div key={uuidv4()}>
                    <div
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/details/${elem.id}`);
                      }}
                    >
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formatDate(elem?.date)}</div>
                      </div>
                      <div className="right">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default ForYou;
