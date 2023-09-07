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
              <h5 className="card-title">26 August</h5>
              <p className="card-text">
                <br />
                Location: Lonavala <br />
                Duration: 2 Days
              </p>{" "}
              <br />
            </div>
            <button className="my-button">Repeat Trip</button>
            <br />
            <button className="my-button">Details</button>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <h5 className="card-title">2 October</h5>
              <p className="card-text">
                <br />
                Location: Nashik <br />
                Duration: 2 Days
              </p>{" "}
              <br />
            </div>
            <button className="my-button">Repeat Trip</button>
            <br />
            <button className="my-button">Details</button>
          </div>
          <div className="content-t-m">
            <div className="card-body">
              <h5 className="card-title">17 August</h5>
              <p className="card-text">
                <br />
                Location: Karjat <br />
                Duration: 2 Days
              </p>
              <br />
            </div>
            <button className="my-button">Repeat Trip</button>
            <br />
            <button className="my-button">Details</button>
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
