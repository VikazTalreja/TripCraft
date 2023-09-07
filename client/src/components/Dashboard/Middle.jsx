import React from "react";
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
                <br />
                Location: Lonavala <br />
                Duration: 2 Days
              </p>{" "}
              <br />
            </div>
            <button className="Third-content">Repeat Trip</button>
            <br />
            <button className="Third-content">Details</button>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <span className="first-content">2 October</span>
              <p className="second-content">
                <br />
                Location: Nashik <br />
                Duration: 2 Days
              </p>{" "}
              <br />
            </div>
            <button className="Third-content">Repeat Trip</button>
            <br />
            <button className="Third-content">Details</button>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <span className="first-content">17 August</span>
              <p className="second-content">
                <br />
                Location: Karjat <br />
                Duration: 2 Days
              </p>
              <br />
            </div>
            <button className="Third-content">Repeat Trip</button>
            <br />
            <button className="Third-content">Details</button>
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
