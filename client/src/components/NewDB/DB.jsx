import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import tripData from "./dummyData.json";
import "./db.css";

const DB = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const finalToken = token.replace("Bearer ", "");
    console.log(finalToken);
    const info = jwt_decode(finalToken);
    console.log(info);
    const temp = info.name.split(" ");
    setUser(temp[0]);
  }, []);

  const [user, setUser] = useState("null");

  return (
    <div className="main-container">
      <div className="left-col">
        <div className="user">
          <div className="greet">
            <h1>Hello {user}</h1>
            <p>Where to, next?</p>
          </div>
          <div className="plan-button">
            <button className="plan-btn">Plan your voyage!</button>
          </div>
        </div>
        <div className="archive-div">
          <div className="archive-container">
            <div className="heading">
              <h1>Archives</h1>
            </div>
            <div className="trip-card-container">
              {/* <div className="trip-card">
                <div className="city">
                  <p>Mumbai</p>
                </div>
                <div className="line"></div>
                <div className="trip-details">
                  <div className="start-date">
                    <span>Start Date:</span> 01/10/2023
                  </div>
                  <div className="duration">
                    <span>Duration:</span> 8 days
                  </div>
                  <button className="details-btn">Details</button>
                </div>
              </div> */}
              {tripData.map((data, index) => (
                <div className="trip-card">
                  <div className="city">
                    <p>{data.cityName}</p>
                  </div>
                  <div className="line"></div>
                  <div className="trip-details">
                    <div className="start-date">
                      <span>Start Date: </span> {data.startDate}
                    </div>
                    <div className="duration">
                      <span>Duration: </span> {data.duration}
                    </div>
                    <button className="details-btn">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="right-container">
          <div className="notifications">
            <div className="right-heading">Notifications</div>
            <div className="line"></div>
            <p>No upcoming notifications!</p>
          </div>
          <div className="upcoming">
            <div className="right-heading">Upcoming</div>
            <div className="line"></div>
            <div className="ticker-container">
              <div className="ticker">
                <p>Sunburn Goa</p>
                <p>Tech Expo Mumbai</p>
                <p>Boat Race Kerela</p>
                <p>Auto Expo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DB;
