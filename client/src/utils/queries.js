import { gql } from '@apollo/client';

export const QUERY_ANIMALS = gql`
  query getAnimals($category: ID) {
    Animals(category: $category) {
      _id
      name
      image
      gender
      age
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($amount: Float, $shelterId: ID) {
    checkout(amount:$amount,shelterId:$shelterId) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const GET_ANIMALS = gql`
query GetAnimals {
  getAnimals {
    _id
    age
    category {
      _id
      name
    }
    gender
    image
    name
  }
}
`;
