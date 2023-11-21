const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Animal {
    _id: ID
    name: String
    color: String
    image: String
    gender: String
    breed: String 
    size: String 
    age: Float
    category: Category
  }

  type Donate {
    _id: ID
    donateDate: String
    donateAmount: Float
    donateMessage: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    checkout(donate: [ID]!): Checkout
    donation(_id: ID!): Donate
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
