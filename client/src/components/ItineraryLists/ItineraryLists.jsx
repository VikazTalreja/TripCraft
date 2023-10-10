import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

import { Link } from "react-router-dom";

import "./ItineraryLists.scss";

const ItineraryLists = () => {
  return (
    <div className="ItineraryLists">
      <div className="header">
        <Link to="/itinerary">
          <button onClick={() => console.log("Hello")}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
        <h1>Itinerary List</h1>
      </div>
      <CardWrapper />
    </div>
  );
};

export default ItineraryLists;
