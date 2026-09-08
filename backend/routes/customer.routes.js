import express from "express";
import {
  registerCustomer,
  loginCustomer,
  getCustomer,
  logoutCustomer,
  changePassword,
} from "../controllers/customer.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import {
  createProduct,
} from "../controllers/product.controller.js";

const customerRoutes = express.Router();

customerRoutes.post("/register", registerCustomer);
customerRoutes.post("/login", loginCustomer);
customerRoutes.get("/me", isAuthenticated, getCustomer);
customerRoutes.post("/logout", logoutCustomer);
customerRoutes.patch("/change-password", isAuthenticated, changePassword);
customerRoutes.post("/products", createProduct);
//customerRoutes.get("/products", getProducts)

export default customerRoutes;
