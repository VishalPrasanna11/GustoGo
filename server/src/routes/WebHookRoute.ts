import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import OrderController from "../controllers/OrderController";

const router = express.Router();
router.post("/webhook", OrderController.stripeWebhookHandler);

export default router;