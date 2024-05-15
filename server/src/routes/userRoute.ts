import express from "express";
import userController from "../controllers/userController";
import jwtCheck from "../middlewares/auth";

const router = express.Router();

// /api/ my/user
router.post("/", jwtCheck, userController.createCurrentUser)

export default router;