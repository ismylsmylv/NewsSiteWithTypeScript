import React from "react";
import "./style.scss";
type Props = {};

function More({}: Props) {
  return (
    <div className="more">
      <h1>Get more news based on your interests</h1>
      <button>For you</button>
    </div>
  );
}

export default More;
