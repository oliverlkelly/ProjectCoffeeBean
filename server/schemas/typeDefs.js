const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    uname: String
    email: String
    password: String
  }

  type Merchant {
    _id: ID
    mname: String
    mtype: String
    mdesc: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(uname: String!): User
    merchants: [Merchant]
    merchant(mname: String!): Merchant
  }

  type Mutation {
    addUser(uname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
