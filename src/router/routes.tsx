import { createBrowserRouter } from "react-router-dom";
import World from "../Pages/World";
import App from "../App";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/world",
        element: <World />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
