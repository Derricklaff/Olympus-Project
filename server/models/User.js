const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Planet = require('./Planet');
const Rocket = require('./Rocket');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  userOxygen: {
    type: Number,
    required: true,
  },
  userOre: {
    type: Number,
    required: true,
  },
  userWater: {
    type: Number,
    required: true,
  },
  userRocket: {
    type: Number,
    required: true,
  },
  userPlanet: {
    type: Number,
    required: true,
  },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
