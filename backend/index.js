import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import customerRoutes from "./routes/customer.routes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/customers", customerRoutes)

app.get('/', (req, res) => {
  res.json({
    message : "Hello, Welcome to ShopKart"
  })
})
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
