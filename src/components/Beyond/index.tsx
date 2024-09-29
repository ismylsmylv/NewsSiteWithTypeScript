import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronRight from "../../img/chevron-right-solid.svg";
import "./style.scss";
import { IdNews } from "../../assets/types/news";
import { formatDate } from "../../utils/functions.js";
type Props = { news: IdNews[] };

function Beyond({ news }: Props) {
  const navigate = useNavigate();
  let beyCount: number = 0;

  return (
    <div className="beyond container">
      <div className="heading">
        Beyond the front page
        <img src={ChevronRight} alt="" />
      </div>
      <div className="info">Notable stories and conversation starters</div>
      {news &&
        news.map((elem) => {
          if (elem.topic == "beyond" && beyCount < 3) {
            beyCount++;
            return (
              <div
                className="cardsBeyond"
                style={{
                  backgroundImage: `url(${elem.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
                key={uuidv4()}
                onClick={() => {
                  navigate(`/details/${elem.id}`);
                }}
              >
                <div className="darkOverlay"></div>
                <div className="cardBeyond">
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="footer">
                      <div className="date">{formatDate(elem.date)}</div>
                      <div className="author" style={{ display: "flex" }}>
                        {/* {" "}
                        {elem.authors.map((auth) => {
                          return ( */}
                        <div
                          className="author"
                          key={uuidv4()}
                          style={{ marginRight: "10px" }}
                        >
                          {elem.authors}
                        </div>
                        {/* ); */}
                        {/* })} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Beyond;
