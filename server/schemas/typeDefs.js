const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Planet {
    _id: ID
    planetName: String
    # bgImgSrc: String
    # groundImgSrc: String
    oxygenRate: Int
    oreRate: Int
    foodRate: Int
    waterRate: Int
  }

  type User {
    _id: ID
    password: String!
    username: String!
    userOxygen: Int
    userOre: Int
    userWater: Int
    userRocket: String
    # userGold: Int
    userPlanet: 
    timeOut:
  }

  type Rocket {
    _id:ID
    name: String
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
    planet: Planet
    users(user: ID, username: String, )
    rocket(_id: ID!): Product
    user: User
  }

  type Mutation {
    addUser(
    username: String
    ): Auth
    addRocket(rocket: [ID]!): Rocket
    updateUser(userName): User
    updateOre(_id: ID!, quantity: Int!): Product
    login(userName: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
