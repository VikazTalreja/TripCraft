import express from "express";

import { allTrips, trip, tripForm } from "../controllers/trips.js";

const router = express.Router();

router.post("/tripform", tripForm);

router.get("/", allTrips);
router.get("/trip/:id", trip);

export default router;
