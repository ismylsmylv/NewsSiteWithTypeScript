import Beyond from "../../components/Beyond";
import Feed from "../../components/Feed";
import ForYou from "../../components/ForYou";
import More from "../../components/More";
import Welcome from "../../components/Welcome";
import YourTopics from "../../components/YourTopics";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { getnews } from "../../redux/slices/connectSlice";

const Home = () => {
  const news = useAppSelector((state) => state.connect.news);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);

  console.log(news);
  return (
    <div>
      {/* <Navbar /> */}
      <Welcome />
      <Feed news={news} />
      <ForYou news={news} />
      <YourTopics news={news} />
      <Beyond news={news} />
      <More />
    </div>
  );
};

export default Home;
