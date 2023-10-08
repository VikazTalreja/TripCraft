import axios from "axios";
import TripData from "../models/TripData.js";
import { MongoClient } from "mongodb";

// import { connectDB } from "../database/database.js";

// const client = await connectDB();

const getDetails = async () => {
  const response = await axios.get(
    "https://api.jsonbin.io/v3/b/651d6ebd12a5d37659871c0d",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$JYn8.slZU529IQm68HF.xeqvtc3uxZmktIt7W97zP73XrNQSWmxSa",
        "X-Access-Key":
          "$2a$10$YvcormE/KerYIhXrM8Tp3.QDwXs6YHf/fkwniVw1HbJpNErcEKmFe",
      },
    }
  );

  return response.data.record;
};

const res = await getDetails();

const newTrip = new TripData({
  user_id: res.user_id,
  trip_id: res.trip_id,
  city: res.city,
  places: res.days,
});

console.log(newTrip.places);

// newTrip
//   .save()
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const client = new MongoClient("mongodb://localhost:27017/mpr");

// await client.connect();

// console.log("connected");

// const db = client.db("mpr");
// const coll = db.collection("tripdata");

// coll.insertOne(newTrip);

await newTrip.save();
