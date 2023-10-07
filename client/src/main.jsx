import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Itinerary from "./components/Itinerary/Itinerary";
import DB from "./components/NewDB/DB";

import "./index.css";
import Form from "./components/Form/Form";
import ChatBot from "./components/Chatbot/ChatBot";

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
    path: "/dashboard",
    element: <DB />,
  },
  {
    path: "/user/Muskan/trips/1",
    element: <Itinerary />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ChatBot />
  </React.StrictMode>
);
