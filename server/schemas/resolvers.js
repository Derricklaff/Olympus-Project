const { AuthenticationError } = require('@apollo/server');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveCheckpoint: async (parent, { checkpoint }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { checkpoint: parseInt(checkpoint) },
        { new: true, runValidators: true }
      );

      return updatedUser;
    },
  }
}

module.exports = resolvers;
