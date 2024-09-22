import CardTemplate from "../../components/CardTemplate";
import "./style.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { navs } from "../../assets/categories";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
interface item {
  title: string;
  bg: string;
  icon: string;
}
function Category() {
  const news = useAppSelector((state) => state.connect.news);
  const [item, setItem] = useState<item>();
  const dispatch = useAppDispatch();
  const { parameter } = useParams();
  useEffect(() => {
    dispatch(getnews());
    const found = navs.filter((nav) => nav.url === "/" + parameter);
    setItem(found[0] as item);
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
            backgroundColor: item?.bg ?? "brown",
          }}
        >
          {item?.icon ? (
            <img src={item?.icon} alt="" />
          ) : (
            <h2>{Array.from(parameter as string)[0]}</h2>
          )}
        </div>
        <h1>{parameter}</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === parameter && <CardTemplate elem={elem} />;
        })}
        {news.map((elem) => {
          return elem.topic === parameter && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Category;
