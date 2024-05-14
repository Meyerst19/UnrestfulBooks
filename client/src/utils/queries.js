import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userId: ID) {
    user(_id: $_id) {
      _id
      username
      email
      password
      savedBooks
      bookCount
    }
  }
`;
