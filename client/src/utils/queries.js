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

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
