import { createBrowserRouter } from "react-router-dom";
import World from "../Pages/World";
import App from "../App";
import Home from "../Pages/Home";
import Business from "../Pages/Business";
import Entertainment from "../Pages/Entertainment";
import Health from "../Pages/Health";
import Local from "../Pages/Local";
import Science from "../Pages/Science";
import Sport from "../Pages/Sports";
import Tech from "../Pages/Technology";
import Admin from "../Pages/Admin";
import ForYouPage from "../Pages/Foryou";
import Details from "../Pages/Details";
import Category from "../Pages/Category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/details/:id",
        element: <Details />,
      },
      // category
      {
        path: "/:parameter",
        element: <Category />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
