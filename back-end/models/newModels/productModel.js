import mongoose from "mongoose"
const Schema = mongoose.Schema;

const productSchema = new Schema({  
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  unit: { type: String, required: true },
  color: { type: String, required: true },
  gauge: { type: String, required: true },
  reorderLevel: { type: Number, required: true },
});


const Product = mongoose.model("Product", productSchema);


export default Product;










