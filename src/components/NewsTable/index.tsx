import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { deleteNews, getnews } from "../../redux/slices/connectSlice";
import { useNavigate } from "react-router-dom";

function NewsTable() {
  const news = useAppSelector((state) => state.connect.news);
  const columns = [
    "title",
    "image",
    "category",
    "topic",
    "likes",
    "dislikes",
    "views",
    "edit",
    "delete",
  ];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  const navigate = useNavigate();
  return (
    <div className="table">
      <div className="table-header">
        {columns.map((column) => {
          return (
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                {column}
              </a>
            </div>
          );
        })}
      </div>
      <div className="table-content">
        {news &&
          news.map((elem) => {
            return (
              <div className="table-row" key={elem.id}>
                <div className="table-data">{elem.title}</div>
                <div className="table-data">
                  <img src={elem.image} alt="" />
                </div>
                <div className="table-data">{elem.category}</div>
                <div className="table-data">{elem.topic}</div>
                <div className="table-data">{elem.likes}</div>
                <div className="table-data">{elem.dislikes}</div>
                <div className="table-data">{elem.views}</div>
                <div className="table-data">
                  <button
                    style={{
                      backgroundColor: "blue",
                    }}
                    onClick={() => {
                      navigate(`/edit/${elem.id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="table-data">
                  <button
                    onClick={() => {
                      dispatch(deleteNews(elem.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NewsTable;
