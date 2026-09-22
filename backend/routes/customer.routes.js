import express from "express";
import {
  registerCustomer,
  loginCustomer,
  getCustomer,
  logoutCustomer,
  changePassword,
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/customer.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import Customer from "../models/customer.model.js";



const customerRoutes = express.Router();

customerRoutes.post("/register", registerCustomer);
customerRoutes.post("/login", loginCustomer);
customerRoutes.get("/me", isAuthenticated, getCustomer);
customerRoutes.post("/logout", logoutCustomer);
customerRoutes.patch("/change-password", isAuthenticated, changePassword);


customerRoutes.post("/wishlist/:productId", isAuthenticated, addToWishlist);
customerRoutes.get("/wishlist",isAuthenticated, getWishlist);
customerRoutes.delete("/wishlist/:productId",isAuthenticated, removeFromWishlist);



export default customerRoutes;
