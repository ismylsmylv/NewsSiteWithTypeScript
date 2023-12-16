import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Welcome from "./components/Welcome";
import Feed from "./components/Feed";
import ForYou from "./components/ForYou";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Welcome />
      <Feed />
      <ForYou />
    </>
  );
}

export default App;
