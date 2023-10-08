import mongoose from "mongoose";

const placesData = new mongoose.Schema({
  day: {
    type: Number,
  },
  places: {
    type: Array,
  },
});

const tripData = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  city: {
    type: String,
    required: true,
  },
  places: [placesData],
});

export default mongoose.model("TripData", tripData);
