import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import invoiceRoutes from "./routers/invoiceRoutes.js";
import inventoryRoutes from "./routers/inventoryRoutes.js";
import authRoutes from "./routers/authRoutes.js";
import employeeRouter from "./routers/userRouters/employeeRouter.js";
import grantAccessRoutes from "./routers/userRouters/grantAccessRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = 8000;
const Mongo_url = process.env.MONGO_URL;

mongoose
  .connect(Mongo_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/inventory", inventoryRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRouter);

app.use("/api", grantAccessRoutes);

app.use("/api", invoiceRoutes);
