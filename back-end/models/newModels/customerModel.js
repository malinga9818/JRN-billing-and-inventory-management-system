// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telephone: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Customer', customerSchema);