import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () => {
  //   console.log(process.env.MONGO_URL);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
