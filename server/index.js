import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./database/database.js";
import userRouter from "./routes/auth.js";
import tripRouter from "./routes/trips.js";

const app = express();
const PORT = 8080;
dotenv.config();

app.set(PORT);
app.use(cors());
app.use(cookieParser());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/dashboard", tripRouter);

app.use("/", (req, res) => {
  res.send("works");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
