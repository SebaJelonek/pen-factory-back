const mongoose = require('mongoose');

const penSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 1 },
  color: { type: String, required: true },
});

const Pen = mongoose.model('pen', penSchema);

module.exports = Pen;
