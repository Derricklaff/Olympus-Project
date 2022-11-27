const mongoose = require('mongoose');

const { Schema } = mongoose;

const rocketSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  maxResourceCount: {
    type: Number,
    required: true,
  },
  minResourceCount: {
    type: Number,
    min: 0,
    default: 0
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}
);

const Rocket = mongoose.model('Rocket', rocketSchema);

module.exports = Rocket;
