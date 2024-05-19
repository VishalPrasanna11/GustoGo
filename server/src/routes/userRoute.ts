import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateUserRequest } from "../middlewares/validation";

const router = express.Router();

// /api/ my/user
router.post("/",  userController.createCurrentUser)
router.put("/", jwtCheck, jwtParse, validateUserRequest, userController.updateUser);
export default router;