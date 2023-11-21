const mongoose = require('mongoose');

const { Schema } = mongoose;

const donateSchema = new Schema({
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

const Donate = mongoose.model('Donate', donateSchema);

module.exports = Donate;
