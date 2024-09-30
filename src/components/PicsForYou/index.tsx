import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IdNews } from "../../assets/types/news";
import { formatDate } from "../../utils/functions.ts";
import "./style.scss";
type Props = { news: IdNews[] };

function PicsForYou({ news }: Props) {
  let pickCount: number = 0;
  const navigate = useNavigate();
  return (
    <div className="PicsForYou" style={{ width: "100%" }}>
      <div
        className="heading"
        // style={{ cursor: "pointer" }}
        // onClick={() => {
        //   navigate("/local");
        // }}
      >
        Picks for you
      </div>
      {news &&
        news.map((elem) => {
          if (elem.topic == "picked" && pickCount < 3) {
            pickCount++;
            return (
              <div key={uuidv4()}>
                <div className="line"></div>

                <div
                  className="cardPicks"
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

export default PicsForYou;
