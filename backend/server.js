import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLODINDAY_API_KEY,
  api_secret: process.env.CLODINDAY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse req body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to Twitter Api");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server connected to port : ${PORT}`);
  connectMongoDb();
});
