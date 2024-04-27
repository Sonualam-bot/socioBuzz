import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();

const app = express();

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server connected to port : ${process.env.PORT}`);
  connectMongoDb();
});
