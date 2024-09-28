import Beyond from "../../components/Beyond";
import Feed from "../../components/Feed";
import ForYou from "../../components/ForYou";
import More from "../../components/More";
import Welcome from "../../components/Welcome";
import YourTopics from "../../components/YourTopics";
import { db } from "../../firebase/config.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { getnews } from "../../redux/slices/connectSlice";

const Home = () => {
  const news = useAppSelector((state) => state.connect.news);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "news"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        fetch
      </button>
      {/* <Navbar /> */}
      <Welcome />
      <Feed news={news} />
      <ForYou news={news} />
      <YourTopics news={news} />
      <Beyond news={news} />
      <More />
    </div>
  );
};

export default Home;
