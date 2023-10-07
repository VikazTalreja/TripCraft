import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  // console.log(process.env.MONGO_URL);
  await mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "mpr",
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
