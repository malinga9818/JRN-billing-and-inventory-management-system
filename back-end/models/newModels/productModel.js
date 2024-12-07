import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  productColor: { type: String, required: true },
  productGauge: { type: String, required: true },
  productUnit: { type: String, required: true },
  productUnitPrice: { type: Number, required: true },
  productStock: { type: Number, required: true },
});

export default mongoose.model("Product", productSchema);
