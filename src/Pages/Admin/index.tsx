import { useState } from "react";
import "./style.scss";
import NewsTable from "../../components/NewsTable";
import AddNews from "../../components/AddNews";

//input title, text, author,image link | select category, topic
function Admin() {
  const [active, setactive] = useState("table");

  return (
    <div className="admin container">
      <h1>Admin page</h1>
      <div className="btns">
        <button
          className={active == "table" ? "active" : ""}
          onClick={() => {
            setactive("table");
          }}
        >
          all news
        </button>
        <button
          className={active == "add" ? "active" : ""}
          onClick={() => {
            setactive("add");
          }}
        >
          add news
        </button>
      </div>
      {active == "table" ? <NewsTable /> : <AddNews />}
    </div>
  );
}

export default Admin;
