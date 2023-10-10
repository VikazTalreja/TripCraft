import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

import { Link } from "react-router-dom";

import "./ItineraryLists.scss";

const ItineraryLists = () => {
  return (
    <div className="ItineraryLists">
      <Link to="/dashboard">
        <button
          className="itinerary-list-btn"
          onClick={() => console.log("Hello")}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </Link>
      <div className="header">
        <h1>Itinerary List</h1>
      </div>
      <CardWrapper />
    </div>
  );
};

export default ItineraryLists;
