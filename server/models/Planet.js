const mongoose = require('mongoose');

const { Schema } = mongoose;

const planetSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  oxygenRate: {
    type: Number,
    required: true
  },
  oreRate: {
    type: Number,
    required: true
  },
  foodRate: {
    type: Number,
    required: true
  },
  waterRate: {
    type: Number,
    required: true
  }
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
