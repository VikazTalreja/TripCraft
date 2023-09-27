import express from "express";

import { allTrips, trip } from "../controllers/trips.js";
import { jwtVerify } from "../middleware/verifyJwt.js";

const router = express.Router();

router.get("/", jwtVerify, allTrips);
router.get("/trip/:id", jwtVerify, trip);

export default router;
