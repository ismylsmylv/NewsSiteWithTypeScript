import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Bars from "../../img/bars-solid.svg";
import Settings from "../../img/gear-solid.svg";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchNews } from "../../redux/slices/connectSlice";
import "./style.scss";

import { useEffect } from "react";

import { getnews } from "../../redux/slices/connectSlice";

function Navbar() {
  const [checked, setchecked] = useState(false);
  const [searchText, setsearchText] = useState("");

  const backnews = useAppSelector((state) => state.connect.backnews);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  console.log("backnews", backnews);

  const navs = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "World",
      url: "/world",
    },
    {
      title: "Local",
      url: "/local",
    },
    {
      title: "Business",
      url: "/business",
    },
    {
      title: "Technology",
      url: "/tech",
    },
    {
      title: "Entertainment",
      url: "/entertainment",
    },
    {
      title: "Sports",
      url: "/sport",
    },
    {
      title: "Science",
      url: "/science",
    },
    {
      title: "Health",
      url: "/health",
    },
  ];
  return (
    <div className="navbar">
      <div className="upperNavbar">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <h2>Google News </h2>
          </Link>
        </div>
        <div className="searchBar">
          <div className="icon">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              dispatch(searchNews(e.target.value));
            }}
            placeholder="Search for topics, locations & sources"
          />
          <ul className="results">
            {backnews &&
              searchText != "" &&
              backnews.map((elem: { id: string; title: string }) => {
                return <li key={elem.id}>{elem.title}</li>;
              })}
          </ul>
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
            {navs.map((nav) => {
              return (
                <button
                  onClick={() => {
                    setchecked(!checked);
                  }}
                  key={nav.title}
                >
                  <Link to={nav.url}>{nav.title}</Link>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="lowerNavbar">
        {navs.map((nav) => {
          return (
            <NavLink
              to={`${nav.url}`}
              className="link"
              style={{
                paddingBottom: "9px",
                color: "white",
              }}
              key={nav.title}
            >
              {nav.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
