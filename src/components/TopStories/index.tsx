import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronRight from "../../img/chevron-right-solid.svg";
import CardTemplate from "../CardTemplate";
import "./style.scss";
import { IdNews } from "../../assets/types/news";

type Props = { news: IdNews[] };

function TopStories({ news }: Props) {
  const navigate = useNavigate();
  let topCount: number = 0;
  return (
    <div
      className="topStories container"
      style={{ marginLeft: "0", cursor: "pointer" }}
    >
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
        news.map((elem) => {
          if (elem.topic == "topStory" && topCount < 3) {
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
