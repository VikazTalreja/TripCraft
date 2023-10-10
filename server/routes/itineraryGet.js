import express from "express";

import { getItinerary } from "../controllers/getItinerary.js";

const router = express.Router();

router.post("/get", getItinerary);

export default router;
