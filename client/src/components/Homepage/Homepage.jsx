import React from "react";
import "./Homepage.css"; // You may need to create a CSS file for styling

import { Link } from "react-router-dom";

import Bgvideo from "../../assets/Video-bg.mp4";

function Homepage() {
  return (
    <div className="homepage">
      <video src={Bgvideo} autoPlay loop muted className="video-bg" />
      <div className="content">
        <h1>TripCraft</h1>
      </div>
      <div class="line-1">
        Ai Powered <br></br>Travel Planner
      </div>
      <div className="Button">
        <Link to="/login">
          <button class="animated-button">
            <span>Start Planning</span>
            <span></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
