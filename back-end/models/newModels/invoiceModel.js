import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
      discount: { type: Number, default: 0 },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: {
    type: String,
    enum: ["Paid", "Partial", "Unpaid"],
    default: "Unpaid",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Invoice", invoiceSchema);
