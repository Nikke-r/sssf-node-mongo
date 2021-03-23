const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 0,
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  color: String,
  weight: Number,
});

module.exports = mongoose.model('Cat', catSchema);