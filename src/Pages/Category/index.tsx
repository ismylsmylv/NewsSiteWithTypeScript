import CardTemplate from "../../components/CardTemplate";
import "./style.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { navs } from "../../assets/categories";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";

function Category() {
  const news = useAppSelector((state) => state.connect.news);
  const [item, setItem] = useState({});
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
