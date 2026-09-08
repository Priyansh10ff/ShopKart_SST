import Product from "../models/product.model.js";
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    if (!name || !description || !price || !category || !image || !stock) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    if (price <= 0) {
      res.status(400).json({
        message: "Inavlid Price",
      });
    }

    if (stock <= 0) {
      res.status(400).json({
        message: "Inavlid stock",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
