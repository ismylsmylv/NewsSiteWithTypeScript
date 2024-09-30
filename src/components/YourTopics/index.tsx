import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { topics } from "../../assets/topics";
import { IdNews } from "../../assets/types/news";
import ChevronRight from "../../img/chevron-right-solid.svg";
import { formatDate } from "../../utils/functions.ts";
import "./style.scss";
type Props = { news: IdNews[] };

function YourTopics({ news }: Props) {
  const navigate = useNavigate();
  return (
    <div className="YourTopics container">
      <div className="catHeading">Your topics</div>
      <div className="info">Recommended based on your interests</div>
      <div className="categories">
        {/* 1 */}

        {topics.map((topic) => {
          return (
            <div className="category">
              <Link to={`/${topic}`} style={{ color: "white" }}>
                {" "}
                <div className="heading">
                  {topic} <img src={ChevronRight} alt="" />{" "}
                </div>
              </Link>

              <div className="cards">
                {news &&
                  news.map((elem) => {
                    return (
                      elem.topic == topic && (
                        <div
                          key={uuidv4()}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/details/${elem.id}`);
                          }}
                          className="cardContainer"
                        >
                          <div className="line"></div>
                          <div className="card">
                            <div className="left">
                              <div className="head">{elem.title}</div>
                              <div className="date">
                                {formatDate(elem?.date)}
                              </div>
                            </div>
                            <div className="right">
                              <img src={elem?.image} alt="" />
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourTopics;
