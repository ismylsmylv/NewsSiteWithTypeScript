import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronRight from "../../img/chevron-right-solid.svg";
import CardTemplate from "../CardTemplate";
import "./style.scss";
import { IdNews } from "../../assets/types/news";
import { useEffect, useState } from "react";

type Props = { news: IdNews[] };

function TopStories({ news }: Props) {
  const navigate = useNavigate();
  let topCount: number = 0;
  const [sorted, setsorted] = useState([] as IdNews[]);
  useEffect(() => {
    const newNews = [...news];
    const sorted = newNews.sort((a, b) => {
      if (a.views > b.views) {
        return -1;
      } else if (a.views < b.views) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    setsorted(sorted);
  }, [news]);
  return (
    <div className="topStories " style={{ marginLeft: "0", cursor: "pointer" }}>
      <div
        className="heading"
        onClick={() => {
          navigate("/world");
        }}
      >
        <p> Top stories</p> <img src={ChevronRight} alt="" />
      </div>
      {/* <div className="line"></div> */}

      {/* cards */}

      {news &&
        sorted.map((elem) => {
          if (topCount < 3) {
            topCount++;
            return <CardTemplate elem={elem} key={uuidv4()} />;
          }
        })}
      {/* <CardTemplate />
      <CardTemplate /> */}
    </div>
  );
}

export default TopStories;
