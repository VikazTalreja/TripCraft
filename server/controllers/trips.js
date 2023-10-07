import jwt from "jsonwebtoken";

import TripCard from "../models/TripCard.js";

export const allTrips = async (req, res) => {
  const token = req.headers["x-access-token"]?.split(" ")[1];
  const decoded = jwt.decode(token);
  const cardData = await TripCard.find({ user_id: decoded.id });
  return res.json(cardData);
};

export const trip = (req, res) => {
  return res.json({ message: "single trip" });
};

export const tripForm = async (req, res) => {
  try {
    console.log("entered controller");
    const data = req.body;
    console.log(data);
    const tripCardData = new TripCard({
      city: data.city,
      date: data.date,
      duration: data.duration,
      user_id: data.uid,
    });

    try {
      tripCardData.save();
    } catch (err) {
      console.log(err);
    }

    return res.json({ message: "saved details" });
  } catch (err) {
    console.log(err);
  }
};
