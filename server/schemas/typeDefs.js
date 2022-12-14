const gql = require('graphql-tag');

const typeDefs = gql`

  type User {
    _id: ID
    username: String!
    email: String!
    checkpoint: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    checkout: Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveCheckpoint(checkpoint: Int!): User
  }
`;

module.exports = typeDefs;
