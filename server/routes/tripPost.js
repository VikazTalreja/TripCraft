import express from "express";

import { tripForm } from "../controllers/trips.js";

const router = express.Router();

router.post("/tripform", tripForm);

export default router;
