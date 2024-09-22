import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { topics } from "../../assets/topics";
import { IdNews } from "../../assets/types/news";
import ChevronRight from "../../img/chevron-right-solid.svg";
import "./style.scss";
type Props = { news: IdNews[] };

function YourTopics({ news }: Props) {
  function formattedDate(elem: IdNews) {
    const unixTimestamp = elem.date;
    const milliseconds = unixTimestamp * 1000;

    const dateObject = new Date(milliseconds);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
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
                              <div className="date">{formattedDate(elem)}</div>
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
