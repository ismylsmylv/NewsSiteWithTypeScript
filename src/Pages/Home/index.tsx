import React from "react";
import Welcome from "../../components/Welcome";
import Feed from "../../components/Feed";
import ForYou from "../../components/ForYou";
import YourTopics from "../../components/YourTopics";
import Beyond from "../../components/Beyond";
import More from "../../components/More";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Welcome />
      <Feed />
      <ForYou />
      <YourTopics />
      <Beyond />
      <More />
    </div>
  );
};

export default Home;
