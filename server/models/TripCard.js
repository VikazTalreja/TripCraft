import mongoose from "mongoose";

const tripCardModel = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.model("TripCard", tripCardModel);
