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
  },
};

module.exports = resolvers;