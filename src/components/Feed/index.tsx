import React from "react";
import "./style.scss";
import TopStories from "../TopStories";
import LocalNews from "../LocalNews";
import PicsForYou from "../PicsForYou";
type Props = {};

function Feed({}: Props) {
  return (
    <div className="feed container">
      <div className="left">
        <TopStories />
      </div>
      <div className="right">
        <LocalNews />
        <PicsForYou />
      </div>
    </div>
  );
}

export default Feed;
