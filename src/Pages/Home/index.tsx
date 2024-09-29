import { useEffect } from "react";
import Beyond from "../../components/Beyond";
import Feed from "../../components/Feed";
import ForYou from "../../components/ForYou";
import More from "../../components/More";
import Welcome from "../../components/Welcome";
import YourTopics from "../../components/YourTopics";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { getnews } from "../../redux/slices/connectSlice";
import Loader from "../../components/Loader";

const Home = () => {
  const news = useAppSelector((state) => state.connect.news);
  const loading = useAppSelector((state) => state.connect.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);

  return (
    <div>
      {loading && <Loader />}
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
