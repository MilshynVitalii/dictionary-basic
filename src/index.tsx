import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./routes/router";
import { store } from "./store";

import "./styles/index.scss";

const rootElem = document.getElementById("root");

if (!rootElem) throw new Error("Not root element is provided");

const root = ReactDOM.createRoot(rootElem);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
