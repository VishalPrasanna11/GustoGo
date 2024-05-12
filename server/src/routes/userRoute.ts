import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// /api/ my/user
router.post("/", userController.createCurrentUser)

export default router;