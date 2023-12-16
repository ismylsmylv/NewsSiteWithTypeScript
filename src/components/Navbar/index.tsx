import React from "react";
import "./style.scss";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import Settings from "../../img/gear-solid.svg";
import { Link } from "react-router-dom";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="upperNavbar">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <h2>Google News </h2>
          </Link>
        </div>
        <div className="searchBar ">
          <div className="icon">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search for topics, locations & sources"
          />
        </div>
        <div className="admin">
          <Link to={"/admin"}>
            {" "}
            <img src={Settings} alt="" />
          </Link>
        </div>
      </div>
      <div className="lowerNavbar container">
        <button>
          <Link to={"/"}>Home</Link>
        </button>
        <button>
          <Link to={"/world"}>World</Link>
        </button>
        <button>
          <Link to={"/local"}>Local</Link>
        </button>
        <button>
          <Link to={"/business"}>Business</Link>
        </button>
        <button>
          <Link to={"/tech"}>Technology</Link>
        </button>
        <button>
          <Link to={"/entertainment"}>Entertainment</Link>
        </button>
        <button>
          <Link to={"/sport"}>Sports</Link>
        </button>
        <button>
          <Link to={"/science"}>Science</Link>
        </button>
        <button>
          <Link to={"/health"}>Health</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
