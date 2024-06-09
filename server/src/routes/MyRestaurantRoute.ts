import express from "express";
import multer from 'multer';
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/validation";


// Multer is a middleware for handling multipart/form-data, 
// which is primarily used for uploading files in Node.js applications. It is commonly used with the Express web application framework. multipart/form-data is a MIME type that allows you to send files, along with other form data, to the server.
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
        limits: {
            fileSize: 5*1024*1024,//5mb
        },
    });
    




//api/my/restaurant
router.post("/",validateMyRestaurantRequest,jwtCheck,jwtParse, upload.single("imageFile"),MyRestaurantController.createMyRestaurant);

export default router;