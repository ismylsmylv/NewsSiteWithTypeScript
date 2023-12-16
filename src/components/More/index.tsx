import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
type Props = {};

function More({}: Props) {
  return (
    <div className="more">
      <h1>Get more news based on your interests</h1>
      <button>
        <Link to={"/foryou"}>Discover</Link>
      </button>
    </div>
  );
}

export default More;
