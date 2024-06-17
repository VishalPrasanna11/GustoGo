import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import MyRestaurantRoute from "./routes/MyRestaurantRoute";
import {v2 as cloudinary} from "cloudinary";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/restaurant", MyRestaurantRoute);
app.use("/user", userRoute);

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log("Connected to MongoDB"))

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


app.get("/health", (req: Request, res: Response) => {
  res.send("Health check passed! Server is up and running.");
});

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

