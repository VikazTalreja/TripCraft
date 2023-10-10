import TripData from "../models/TripData.js";

export const getItinerary = async (req, res) => {
  const { user_id, city } = req.body;

  console.log(user_id);
  console.log(city);

  const data = TripData.findOne({
    user_id: user_id,
    city: city,
  })
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
