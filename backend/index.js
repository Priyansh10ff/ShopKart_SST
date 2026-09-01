import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import customerRoutes from "./routes/customer.routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello, Welcome to ShopKart",
  });
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "http://localhost:5173", // Must match exact frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
