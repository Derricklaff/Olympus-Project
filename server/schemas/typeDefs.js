const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    password: String!
    username: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users(user: ID, username: String ):[User]
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    updateUser(username: String!, password: String!): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
