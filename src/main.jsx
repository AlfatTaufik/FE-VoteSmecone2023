import React from "react";
import Login from "./components/loginPage/Login";
import Otp from "./components/loginPage/Otp";
import Vote from "./components/votePage/Vote";
// import Votemodal from "./components/modal/Votemodal";
// import Votepage from "./Votepage";
// import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Pageformodal from "./Pageformodal";
import { Detail } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/vote",
    element: <Vote />,
  },
  {
    path: "/modal",
    element: <Pageformodal />
  },
  {
    path: "/detailpaslon",
    element: <Detail />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
