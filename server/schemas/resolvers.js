const { GraphQLError } = require('graphql');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51M9b6wJfacGwExObuU14krEOBWsuHJN61YAuc1HGjuAN5V30eSbZVeJinyRRuFboY0BLaemo8zWb1OGUp6g5Zl4W00KTn5LSuK');


const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const line_items = [];

      const payment = await stripe.products.create({
        name: 'Developer Coffee',
        description: 'Donation to the developers of the game',
        images: ["https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"]
      })

      const price = await stripe.prices.create({
        product: payment.id,
        unit_amount: 500,
        currency: 'usd'
      });

      line_items.push({
        price: price.id,
        quantity: 1
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/donation-thanks`,
        cancel_url: `${url}`
    });
    return {session:session.id}
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {

      if (password.length < 8) {
        return new Error('Password must be at least 8 characters long')
      }
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError('No user found with this email address', {
          extensions: {
            code: 'UNAUTHENTICATED',
          }
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError('Incorrect credentials', {
          extensions: {
            code: 'UNAUTHENTICATED',
          }
        });
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
