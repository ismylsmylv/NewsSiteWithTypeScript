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
import { RootState } from "../../redux/store/store";
type Props = {};

function Navbar({}: Props) {
  const [checked, setchecked] = useState(false);
  const [empty, setempty] = useState("");
  const { loading, error } = useAppSelector(
    (state: RootState) => state.connect
  );
  let backnews = useAppSelector((state) => state.connect.backnews);
  const [data, setdata] = useState([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  console.log("backnews", backnews);

  const lowerNavbar = [
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
            placeholder="Search for topics, locations & sources"
            onChange={(e) => {
              dispatch(searchNews(e.target.value));
              setempty(e.target.value);
            }}
          />
          <ul className="results">
            {backnews &&
              empty != "" &&
              backnews.map((elem) => {
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
              <Link to={"/category/entertainment"}>Entertainment</Link>
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
        {lowerNavbar.map((nav) => {
          return (
            <NavLink
              to={`${nav.url}`}
              className="link"
              activeclassname="active"
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
