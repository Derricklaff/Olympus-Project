const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Planet {
    _id: ID
    planetName: String
    oxygenRate: Int
    oreRate: Int
    foodRate: Int
    waterRate: Int
  }

  type User {
    _id: ID
    password: String!
    username: String!
  
  }

  type Rocket {
    _id: ID
    name: String
    maxResourceCount: Int
    minResourceCount: Int
    fuelNeeded: Int
  }

  type All {
    user: [User]
    rocket: [Rocket]
    planet: [Planet]
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
    planet: [Planet]
    users(user: ID, username: String ):[User]
    rocket(_id: ID!): Product
    user: User
  }

  type Mutation {
    addUser(username: String): Auth
    addRocket(rocket: [ID]!): Rocket
    updateUser(username: String): User
    updateOre(_id: ID!, quantity: Int!): Product
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
