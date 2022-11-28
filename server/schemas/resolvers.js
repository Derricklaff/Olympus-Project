const { AuthenticationError } = require('apollo-server-express');
const { User, Planet, Rocket } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    
    users: async (parent, { _id }) => {
      return await User.findById(_id).populate('room');
    },
    
    },
    Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

  },
  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    }

    throw new AuthenticationError('Not logged in');
  },

  login: async (parent, { username, password }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
  }
};

module.exports = resolvers;
