const { AuthenticationError } = require('apollo-server-express');
const { User, Merchant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { uname }) => {
      return User.findOne({ uname });
    },
    merchant: async () => {
      return Merchant.find();
    },
    merchant: async (parent, { mname }) => {
      return Merchant.findOne({ mname });
    },
  },
  Mutation: {
    addUser: async (parent, { uname, email, password }) => {
      const user = await User.create({ uname, email, password });
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
  },
};

module.exports = resolvers;