import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["cashier", "owner", "admin"],
  },
  status: { type: String, default: "active" },
});

export default mongoose.model("User ", userSchema);