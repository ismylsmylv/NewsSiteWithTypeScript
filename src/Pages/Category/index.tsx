import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { navs } from "../../assets/categories";

function Category() {
  const news = useAppSelector((state) => state.connect.news);
  const [item, setItem] = useState();
  const dispatch = useAppDispatch();
  const { parameter } = useParams();
  useEffect(() => {
    dispatch(getnews());
    const found = navs.filter((nav) => nav.url === "/" + parameter);
    setItem(found[0]);
    console.log(found[0]);
  }, [dispatch, parameter]);
  return (
    <div
      className="Business
 container"
    >
      <div className="heading">
        <div
          className="imgCont"
          style={{
            backgroundColor: item?.bg,
          }}
        >
          <img src={item?.icon} alt="" />
        </div>
        <h1>{parameter}</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === parameter && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Category;
