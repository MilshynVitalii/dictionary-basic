import { createBrowserRouter } from "react-router-dom";

import Root from "./root/Root";
import RootErrorPage from "./root/RootErrorPage";
import Home from "./Home";
import Exercises from "./Exercises";
import WordHandlePanel from "./wordHandlePanel/WordHandlePanel";
import WordDetails from "./wordDetails/WordDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RootErrorPage />,
    children: [
      {
        errorElement: <RootErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/exercises",
            element: <Exercises />,
          },
          {
            path: "/word/:id",
            element: <WordDetails />,
          },
          {
            path: "/word/:id/:action",
            element: <WordHandlePanel />,
          },
        ],
      },
    ],
  },
]);

export default router;
