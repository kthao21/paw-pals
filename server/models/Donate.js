const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  donateDate: {
    type: Date,
    default: Date.now
  },
  donateAmount: {
    type: Number,
    required: true
  },
  donateMessage: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
