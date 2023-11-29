import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const PROCESS_DONATION = gql`
  mutation processDonation($amount: Int!) {
    processDonation(amount: $amount) {
      _id
      firstName
      lastName
      email
      donations {
        _id
        amount
      }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SEND_CONTACT_MESSAGE = gql`
mutation sendContactMessage($name: String!, $email: String!, $message: String!) {
  sendContactMessage(name: $name, email: $email, message: $message) {
    _id
    name
    email
    message
  }
}
`;

export const UPDATE_CATEGORIES = gql`
mutation upateCategories($categories: [ID]!) {
updateCategories(categories: $categories) {
_id
  }
}
`;

export const UPDATE_CURRENT_CATEGORY = gql`
mutation updateCurrentCategory($name: String!){
updateCurrentCategory(name: $name)
@client
}
`;
