import express from 'express';
import Customer from '../models/newModels/customerModel.js';
import Product from '../models/newModels/productsModel.js';
import Invoice from '../models/newModels/invoiceModel.js';

const router = express.Router();

router.post('/invoices', async (req, res) => {
  try {
    const { date, time, customer, products, totals } = req.body;

    // to save customer
    const newCustomer = new Customer(customer);
    const savedCustomer = await newCustomer.save();

    // to save products
    const savedProducts = await Promise.all(
      products.map((product) => new Product(product).save())
    );

    // to save invoice
    const newInvoice = new Invoice({
      date,
      time,
      customer: savedCustomer._id,
      products: savedProducts.map((product) => product._id),
      totals,
    });

    const savedInvoice = await newInvoice.save();

    res.status(201).json({ message: 'Invoice created successfully', invoice: savedInvoice });
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error: error.message });
  }
});

export default router;
