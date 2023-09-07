import React from "react";
import "./style.css";
import Left from "./Left";
import Middle from "./Middle";
import End from "./End";

const Dashboard = () => {
  return (
    <body className="dash-container">
      <span className="vessel">
        <div className="left">
          <Left />
        </div>
        <div className="middle">
          <Middle />
        </div>
        <div className="end">
          <End />
        </div>
      </span>
    </body>
  );
};

export default Dashboard;
