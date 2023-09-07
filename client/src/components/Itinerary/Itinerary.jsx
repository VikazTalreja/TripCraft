import React from "react";
import ItineraryLists from "../ItineraryLists/ItineraryLists";
import "./Itinerary.scss";
import TravelMap from "../LocationMap/TravelMap";
import data from "../../data/data.json";

const Itinerary = () => {
  return (
    <div className="Itinerary">
      <ItineraryLists />
      <TravelMap data={data.days} />
    </div>
  );
};

export default Itinerary;
