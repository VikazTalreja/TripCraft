import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Middle = () => {
  return (
    <>
      <div className="top-mid">
        <h2 className="name">History</h2>
        <div className="card">
          <div className="content-t-m">
            <div className="card-body">
              <span className="first-content">26 August</span>
              <p className="second-content">
                Location: Mumbai <br></br> Duration: 6 Days
              </p>
            </div>
            <button className="third-content">Repeat Trip</button>
            <Link to="/user/Muskan/trips/1">
              <button className="third-content">Details</button>
            </Link>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <span className="first-content">2 October</span>
              <p className="second-content">
                Location: Nashik <br></br> Duration: 2 Days
              </p>
            </div>
            <button className="third-content">Repeat Trip</button>
            <button className="third-content">Details</button>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <span className="first-content">17 August</span>
              <p className="second-content">
                Location: Karjat <br></br> Duration: 2 Days
              </p>
            </div>
            <button className="third-content">Repeat Trip</button>
            <button className="third-content">Details</button>
          </div>
        </div>
      </div>
      <div className="bottom-mid">
        <button className="tripbutton">
          <span>PLAN NOW</span>
        </button>
      </div>
    </>
  );
};

export default Middle;
