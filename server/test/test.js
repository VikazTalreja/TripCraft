import TripData from "../models/TripData.js";

export const test = async (req, res) => {
  const info = req.body;
  console.log(info);
  const newTrip = new TripData({
    user_id: info.user_id,
    city: info.city,
    places: info.days,
  });

  newTrip.save();

  return res.json({ message: "data saved" });
};
