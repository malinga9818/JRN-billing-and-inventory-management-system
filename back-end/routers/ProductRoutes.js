import express from "express";
import {
    getAllProducts,
    addProducts,
    getProductById,
    updateProductDetails,
    deleteProductDetails,
} from "../controllers/productControler.js";

const router = express.Router();

// Route to get all products
router.get("/", getAllProducts);

// Route to add a product
router.post("/", addProducts);

// Route to get a product by ID
router.get("/:id", getProductById);

// Route to update a product by ID
router.put("/:id", updateProductDetails);

// Route to delete a product by ID
router.delete("/:id", deleteProductDetails);

export default router;






// import express from "express";
// import {getAllProducts, addProducts, getProductById, updateProductDetails, deleteProductDetails} from "../controllers/productControler.js"

// const router = express.Router();


// //create route path
// router.get("/", getAllProducts);
// router.post("/", addProducts);
// router.get("/:id", getProductById);
// // router.put("/:id", updateProductDetails);
// router.put("/products/:id", updateProductDetails);
// router.delete("/:id", deleteProductDetails);

// // export
// export default router;

