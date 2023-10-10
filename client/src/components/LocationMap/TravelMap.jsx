import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./TravelMap.css";

const style = {
  height: "100%",
  width: "100%",
};
const TravelMap = () => {
  const jsonString = sessionStorage.getItem("response");
  const data = JSON.parse(jsonString);
  const mapRef = useRef(null); // Ref to store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Create a Leaflet map instance if it doesn't exist
      mapRef.current = L.map("leaflet-map").setView(
        [19.0821978, 72.7410984],
        13
      );

      // Add tile layer to the map
      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //   attribution: "OpenStreetMap",
      // }).addTo(mapRef.current);
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }).addTo(mapRef.current);
    }

    // Loop through data to add markers and popups
    data.places.forEach((day) => {
      day.activities.forEach((activity) => {
        const [location, coordinates] = activity;
        L.marker(coordinates)
          .addTo(mapRef.current)
          .bindPopup(
            L.popup({
              maxWidth: 150,
              className: "popup",
            })
          )
          .setPopupContent(`${location} at Day ${day.day}`)
          .openPopup();
      });
    });
    console.log("it works");
  }, [data]);

  return (
    <div className="Map">
      <div id="leaflet-map" style={style} />
    </div>
    // <h1>works</h1>
  );
};

export default TravelMap;
