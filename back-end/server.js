import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const Mongo_url = process.env.MONGO_URL;
mongoose
  .connect(Mongo_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(8000, () => {
  console.log("Server is running on port 5000");
});

import inventoryRoutes from "./routers/inventoryRoutes.js";
app.use("/inventory", inventoryRoutes);

import authRoutes from "./routers/authRoutes.js";
app.use("/api/auth", authRoutes); 
