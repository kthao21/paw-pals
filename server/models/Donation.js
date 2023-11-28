const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  shelterID: {
    type: String,
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
