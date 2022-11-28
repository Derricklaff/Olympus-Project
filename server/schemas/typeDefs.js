const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Checkpoint {
    _id: ID
    planetName: String
  }

  type User {
    _id: ID
    password: String!
    username: String!
  
  }


  type All {
    user: [User]
    rocket: [RocketRoom]
    planet: [PlanetRoom]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: All
    planet: [PlanetRoom]
    users(user: ID, username: String ):[User]
    rocket(_id: ID!): Product
    user: User
  }

  type Mutation {
    addUser(username: String): Auth
    updateUser(username: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
