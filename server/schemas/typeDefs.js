const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Animal {
    _id: ID
    name: String
    image: String
    gender: String
    age: Float
    category: Category
  }

  type Donation {
    id: ID!
    amount: Float!
    shelterId: ID!
   }

  type Shelter {
    id: ID!
    name: String!
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
    donation(_id: ID!): Donation
    checkout (amount: Float, shelterId: ID): Checkout,
    getAnimals: [Animal]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    processDonation(amount: Float!, shelterId: ID!): Donation
  }
  
 
`;

module.exports = typeDefs;
