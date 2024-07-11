import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

// router.get(
//   "/order",
//   jwtCheck,
//   jwtParse,
//   MyRestaurantController
// );

// router.patch(
//   "/order/:orderId/status",
//   jwtCheck,
//   jwtParse,
//   MyRestaurantController.updateOrderStatus
// );

router.get("/", jwtCheck, jwtParse, MyRestaurantController.getRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  //validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

router.put(
  "/",
  upload.single("imageFile"),
//  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant
);

export default router;