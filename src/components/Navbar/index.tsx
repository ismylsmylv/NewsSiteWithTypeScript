import { IoSearch } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Bars from "../../img/bars-solid.svg";
import Settings from "../../img/gear-solid.svg";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchNews } from "../../redux/slices/connectSlice";
import "./style.scss";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { navs } from "../../assets/categories";
import { getnews } from "../../redux/slices/connectSlice";
import { useLocation } from "react-router-dom";
function Navbar() {
  const [checked, setchecked] = useState(false);
  const [searchText, setsearchText] = useState("");

  const backnews = useAppSelector((state) => state.connect.backnews);
  // const news = useAppSelector((state) => state.connect.news);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getnews());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, location]);

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
            <IoSearch size={20} color="#B4B6B7" />
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
          <div
            className="clear"
            style={{
              opacity: searchText ? 1 : 0,
            }}
          >
            <IoCloseOutline
              size={20}
              color="#B4B6B7"
              onClick={() => {
                setsearchText("");
              }}
            />
          </div>
          <ul className="results">
            {backnews &&
              searchText != "" &&
              backnews.map((elem: { id: string; title: string }) => {
                return (
                  <li
                    onClick={() => {
                      setsearchText("");
                      navigate(`/details/${elem.id}`);
                    }}
                    key={elem.id}
                  >
                    {elem.title}
                  </li>
                );
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
                    window.scrollTo(0, 0);
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
