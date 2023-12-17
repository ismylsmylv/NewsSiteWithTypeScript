import { Link } from "react-router-dom";
import Settings from "../../img/gear-solid.svg";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import "./style.scss";
import Bars from "../../img/bars-solid.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <div className="searchMobileBar">
            <div className="icon">
              <img src={SearchIcon} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search for topics, locations & sources"
            />
          </div>
          <div className="catBtns">
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
        </div>
      )}
      <div className="lowerNavbar">
        <NavLink
          to={"/"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/world"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          World
        </NavLink>
        <NavLink
          to={"/local"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Local
        </NavLink>
        <NavLink
          to={"/business"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Business
        </NavLink>
        <NavLink
          to="/tech"
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Technology
        </NavLink>
        <NavLink
          to={"/entertainment"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Entertainment
        </NavLink>
        <NavLink
          to={"/sport"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Sports
        </NavLink>
        <NavLink
          to={"/science"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Science
        </NavLink>
        <NavLink
          to={"/health"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Health
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
