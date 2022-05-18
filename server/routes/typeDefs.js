const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    uname: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    Users: [User]
    user(uname: String!): User
  }
`;

module.exports = typeDefs;
