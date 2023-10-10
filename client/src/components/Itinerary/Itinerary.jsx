import React, { useEffect, useState } from "react";
import ItineraryLists from "../ItineraryLists/ItineraryLists";
import TravelMap from "../LocationMap/TravelMap";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import "./Itinerary.scss";

// const [itineraryData, setItineraryData] = useState();

// export const handleDetailsClick = () => {

//   const city =
//   window.location.href = "http://localhost:5173/itinerary";

//   axios.get("http://localhost:8080/itinerary/get").then((res)=>);
// };

const Itinerary = () => {
  // const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItinerary();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getItinerary = async () => {
    await axios
      .post("http://localhost:8080/itinerary/get", {
        city: localStorage.getItem("city"),
        user_id: localStorage.getItem("user_id"),
      })
      .then((result) => {
        // setResponse(result.data);
        sessionStorage.setItem("response", JSON.stringify(result.data));
        console.log(sessionStorage.getItem("response"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // return (
  //   // <h1>{response.data}</h1>
  // <div className="Itinerary">
  //   <ItineraryLists data={response} />
  //   <TravelMap data={response.places} />
  // </div>
  // );

  return loading ? (
    <LoadingScreen text={"Please wait..."} />
  ) : (
    <div className="Itinerary">
      <ItineraryLists />
      <TravelMap />
    </div>
  );
};

export default Itinerary;
