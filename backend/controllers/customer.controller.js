import bcrypt from "bcrypt";
import customer from "../models/customer.model.js";
import genToken from "../utils/generateToken.js";

export const registerCustomer = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailExists = await customer.findOne({ email });

    if (emailExists) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
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
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        message: "All field are required",
      });
    }

    const emailExists = await customer.findOne({ email });

    if (!emailExists) {
      return res.status(401).json({
        message: "Customer account not found",
      });
    }

    const correctPassword = bcrypt.compareSync(password, emailExists.password);

    if (!correctPassword) {
      return res.status().json({
        message: "Invalid Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getCustomer = async (req, res) => {
  try {
    return res.status(200).json(req.customer);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const logoutCustomer = async (req, res) => {
  try {
    res.clearCookie();
    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status().json({
        message: "Both passwords are required",
      });
    }

    if (newPassword < 6) {
      return res.status().json({
        message: "New password must contain atleast 6 characters",
      });
    }

    const customerExists = await customer.findById(req.customerId)

    if(!customerExists){
        return res.status().json({
            message : "Unauthorized"
        })
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
