import { Link } from "react-router-dom";
import Settings from "../../img/gear-solid.svg";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import "./style.scss";
import Bars from "../../img/bars-solid.svg";
import { useState } from "react";
type Props = {};

function Navbar({}: Props) {
  const [checked, setchecked] = useState(false);
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
        <div className="navMobile">
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <img src={Bars} alt="" />
          </button>
        </div>
      </div>
      {checked && (
        <div className="navList">
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/"}>Home</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/world"}>World</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/local"}>Local</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/business"}>Business</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/tech"}>Technology</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/entertainment"}>Entertainment</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/sport"}>Sports</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/science"}>Science</Link>
          </button>
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <Link to={"/health"}>Health</Link>
          </button>
        </div>
      )}
      <div className="lowerNavbar">
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
