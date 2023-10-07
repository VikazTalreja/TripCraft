import express from "express";

import { chatbot } from "../controllers/chatbot.js";

const router = express.Router();

router.post("/response", chatbot);

export default router;
