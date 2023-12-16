import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Welcome from "./components/Welcome";
import Feed from "./components/Feed";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Welcome />
      <Feed />
    </>
  );
}

export default App;
