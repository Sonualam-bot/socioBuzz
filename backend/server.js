import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDb from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse req body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to Twitter Api");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server connected to port : ${PORT}`);
  connectMongoDb();
});
