const { AuthenticationError } = require('apollo-server-express');
const { User, Planet, Rocket } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    planet: async () => {
      const params = {};

      return await Planet.findById().populate('planet');
    },
    users: async (parent, { _id }) => {
      return await User.findById(_id).populate('category');
    },
    rocket: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          planet: 'planet.id',
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
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
  updatePlanet: async (parent, { _id, quantity }) => {
    const decrement = Math.abs(quantity) * -1;

    return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

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
