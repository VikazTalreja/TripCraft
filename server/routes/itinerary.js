import express from "express";

import { generator } from "../controllers/generator.js";

const router = express.Router();

router.post("/generate", generator);

export default router;
