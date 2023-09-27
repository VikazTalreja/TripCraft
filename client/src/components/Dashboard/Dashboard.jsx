import React from "react";
import "./style.css";
import Mainmiddle from "./Mainmiddle";
import End from "./End";

const Dashboard = () => {
  return (
    <body className="dash-container">
      <span className="vessel">
        <div className="middle">
          <Mainmiddle />
        </div>
        <div className="end">
          <End />
        </div>
      </span>
    </body>
  );
};

export default Dashboard;
