import gql from 'graphql-tag';

export const QUERY_USER = gql`
query user {
  user {
    _id
    username
    email
    checkpoint
  }
}
`;

export const QUERY_CHECKOUT = gql`
query getCheckout{
  checkout{
    session
  }
}
`;