import React from "react";
import "./Navbar.scss";
import SearchIcon from "../img/magnifying-glass-solid.svg";
import Settings from "../img/gear-solid.svg";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="upperNavbar">
        <div className="logo">
          <h2>Google News</h2>
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
          <a href="">
            <img src={Settings} alt="" />
          </a>
        </div>
      </div>
      <div className="lowerNavbar container">
        <button>Home</button>
        <button>World</button>
        <button>Local</button>
        <button>Business</button>
        <button>Technology</button>
        <button>Entertainment</button>
        <button>Sports</button>
        <button>Science</button>
        <button>Health</button>
      </div>
    </div>
  );
}

export default Navbar;
