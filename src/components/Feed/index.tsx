import { IdNews } from "../../assets/types/news";
import NewsList from "../NewsList";
import TopStories from "../TopStories";
import "./style.scss";
type Props = { news: IdNews[] };

function Feed({ news }: Props) {
  return (
    <div className="feed container">
      <div className="left">
        <TopStories news={news} />
      </div>
      <div className="right">
        <NewsList
          news={news}
          heading="Local News"
          color="#a596cf"
          category="local"
        />
        <NewsList
          news={news}
          heading="World Today"
          color="#75b8b1"
          category="world"
        />
      </div>
    </div>
  );
}

export default Feed;
