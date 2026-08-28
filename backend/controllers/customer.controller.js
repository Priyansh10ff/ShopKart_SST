import bcrypt from "bcrypt";
import customer from "../models/customer.model.js";
import genToken from "../utils/generateToken.js";

const cookieOptions = {
  httpOnly: true,
  secure: true,
};

export const registerCustomer = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const emailExists = await customer.findOne({ email });

    if (emailExists) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password should be greater than 6 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = await customer.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    const token = genToken(newCustomer._id);
    res.cookie("token", token, cookieOptions);

    const newCustomerObj = newCustomer.toObject();
    delete newCustomerObj.password;

    return res.status(201).json({
      success: true,
      message: "Customer registered successfully",
      newCustomer: newCustomerObj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All field are required",
      });
    }

    const emailExists = await customer.findOne({ email });

    if (!emailExists) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const correctPassword = bcrypt.compareSync(password, emailExists.password);

    if (!correctPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = genToken(emailExists._id);
    res.cookie("token", token, cookieOptions);

    const emailExistsObj = emailExists.toObject();
    delete emailExistsObj.password;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      emailExists: emailExistsObj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCustomer = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      customer: req.customer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const logoutCustomer = async (req, res) => {
  try {
    res.clearCookie("token", cookieOptions);
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Both passwords are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must contain atleast 6 characters",
      });
    }

    const customerExists = await customer.findById(req.customer._id);

    if (!customerExists) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const correctPassword = bcrypt.compareSync(
      oldPassword,
      customerExists.password
    );

    if (!correctPassword) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    customerExists.password = await bcrypt.hash(newPassword, 10);
    await customerExists.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};