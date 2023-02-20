import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/stories",
    element: <h1>Stories</h1>,
  },
]);

export default router;
