import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../Pages/Category";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/details/:id",
        element: <Details elem={[]} />,
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
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
