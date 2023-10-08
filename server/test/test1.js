import { TripData } from "../models/TripData.js";

const placesData = [
  {
    day: 1,
    places: ["Arrival & Check In", "Gateway Of India", "Elephanta Caves"],
  },
  {
    day: 2,
    places: [
      "Chhatrapati Shivaji Maharaj Terminus",
      "Colaba Causeway",
      "Marine Drive",
    ],
  },
  {
    day: 3,
    places: [
      "Siddhivinayak Temple",
      "Dadar Flower Market",
      "Bandra-Worli Sea Link",
    ],
  },
  {
    day: 4,
    places: ["Haji Ali Dargah", "Mahalaxmi Dhobi Ghat", "Nehru Science Centre"],
  },
  {
    day: 5,
    places: ["Sanjay Gandhi National Park", "Kanheri Caves", "Departure"],
  },
];

const tripData = new TripData({
  user_id: "65108ad5f128a02617d4c766",
  trip_id: "651ab3a69cf6d643faf3901c",
  city: "Mumbai",
  days: placesData,
});

tripData
  .save()
  .then((e) => console.log(e))
  .catch((err) => {
    console.log(err);
  });
