import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Itinerary from "./components/Itinerary/Itinerary";

import "./index.css";
import Chatbot from "./components/Chatbot/Chatbot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/Muskan",
    element: <Dashboard />,
  },
  {
    path: "/user/Muskan/trips/1",
    element: <Itinerary />,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Chatbot />
  </React.StrictMode>
);
