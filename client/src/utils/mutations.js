import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      checkpoint
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      checkpoint
    }
  }
}
`;

export const SAVE_CHECKPOINT = gql`
  mutation saveCheckpoint($checkpoint: Int!) {
  saveCheckpoint(checkpoint: $checkpoint) {
    _id
    username
    email
    checkpoint
  }
}
`;