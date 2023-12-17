import React, { useState } from "react";
import "./style.scss";
import { newsClass } from "../../assets/class/addNews";
import axios from "axios";
type Props = {};

//input title, text, author,image link | select category, topic
function Admin({}: Props) {
  const [InpTitle, setInpTitle] = useState("");
  const [InpText, setInpText] = useState("");
  const [InpAuthor, setInpAuthor] = useState([]);
  const [InpImg, setInpImg] = useState("");
  const [InpCat, setInpCat] = useState("");
  const [InpTop, setInpTop] = useState("");
  return (
    <div className="admin container">
      <h1>Admin page</h1>
      <h2>Add new</h2>
      <form className="dataInput">
        <div className="row1">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setInpTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Content text"
            onChange={(e) => {
              setInpText(e.target.value);
            }}
          />
        </div>
        <div className="row2">
          <input
            type="text"
            placeholder="Authors"
            onChange={(e) => {
              setInpAuthor(e.target.value);
            }}
          />
          <input
            type="url"
            placeholder="Image link"
            onChange={(e) => {
              setInpImg(e.target.value);
            }}
          />
        </div>
        <div className="row3">
          <div
            className="selectOpt"
            onChange={(e) => {
              setInpCat(e.target.value);
            }}
          >
            <select name="" id="">
              <option value="null">Category</option>
              <option value="world">World</option>
              <option value="local">Local</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
            </select>
          </div>
          <div
            className="selectOpt"
            onChange={(e) => {
              setInpTop(e.target.value);
            }}
          >
            <select name="" id="">
              <option value="null">Topic</option>
              <option value="beyond">Beyond</option>
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="picked">Picked</option>
              <option value="entertainment">Entertainment</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
              <option value="topStory">Top Story</option>
            </select>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const data = newsClass(
              InpTitle,
              InpText,
              InpAuthor,
              InpImg,
              InpCat,
              InpTop
            );
            console.log(data);
            axios.post(
              "https://6576df5f197926adf62ca419.mockapi.io/news",
              data
            );
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Admin;
