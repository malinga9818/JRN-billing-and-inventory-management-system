import Product from "../models/newModels/productsModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

// Add a new product
export const addProducts = async (req, res) => {
  const { name, qty, unit, color, gauge, reorderLevel } = req.body;

  try {
    const newProduct = new Product({
      name,
      qty,
      unit,
      color,
      gauge,
      reorderLevel,
    });
    await newProduct.save();
    return res.status(201).json({ product: newProduct });
  } catch (error) {
    console.error("Error inserting product:", error);
    return res.status(500).json({ error: "Failed to add product." });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    return res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

// Update product details
export const updateProductDetails = async (req, res) => {
  const id = req.params.id;
  const { name, qty, unit, color, gauge, reorderLevel } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, qty, unit, color, gauge, reorderLevel },
      { new: true } // Ensures the updated document is returned
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found for update." });
    }
    return res.status(200).json({ product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Failed to update product." });
  }
};

// Delete a product
export const deleteProductDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "Product not found for deletion." });
    }
    return res
      .status(200)
      .json({
        message: "Product deleted successfully.",
        product: deletedProduct,
      });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ error: "Failed to delete product." });
  }
};
