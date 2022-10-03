const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  totalValue: { type: Number, required: true },
  productNameList: { type: Array, required: true },
  productBrandList: { type: Array, required: true },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
