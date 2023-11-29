const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
