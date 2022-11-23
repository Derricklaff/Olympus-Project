const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Planet {
    _id: ID
    planetName: String
    bgImgSrc: String
    groundImgSrc: String
    oxygenRate: Int
    oreRate: Int
    foodRate: Int
    waterRate: Int
  }

  type User {
    _id: ID
    username: String
    userOxygen: Int
    userOre: Int
    userWater: Int
    userOxygen: Int
    userRocket: String
    userGold: Int
    userPlanet: 
    userGold:
    timeOut:
  }

  type Rocket {
    _id:ID
    maxResourceCount: Int
    minResourceCount: Int
    fuelNeeded: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [User, Rocket, Planet]
    users(user: ID, username: String, )
    rocket(_id: ID!): Product
    user: User
   }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRocket(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
