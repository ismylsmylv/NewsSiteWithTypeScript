import React from "react";
import Welcome from "../../components/Welcome";
import Feed from "../../components/Feed";
import ForYou from "../../components/ForYou";
import YourTopics from "../../components/YourTopics";
import Beyond from "../../components/Beyond";
import More from "../../components/More";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { RootState } from "../../redux/store/store";

import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";

import { getNews, getnews } from "../../redux/slices/connectSlice";
import axios from "axios";
type Props = { news: object[] };

const Home = (props: Props) => {
  const { loading, error } = useAppSelector(
    (state: RootState) => state.connect
  );
  const news = useAppSelector((state) => state.connect.news);
  const [data, setdata] = useState([]);

  useEffect(() => {
    dispatch(getnews());
  }, []);

  console.log(news);
  const dispatch = useAppDispatch();
  console.log(data);
  return (
    <div>
      {/* <Navbar /> */}
      <Welcome />
      <Feed news={news} />
      <ForYou />
      <YourTopics />
      <Beyond />
      <More />
    </div>
  );
};

export default Home;
