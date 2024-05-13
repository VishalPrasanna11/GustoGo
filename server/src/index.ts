import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/vi/user", userRoute);

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log("Connected to MongoDB"))




// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

