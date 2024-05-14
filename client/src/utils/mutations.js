import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $description: String!
    $bookId: String!
    $title: String!
    $image: String
    $authors: [String]
    $link: String
  ) {
    saveBook(
      description: $description
      bookId: $bookId
      title: $title
      image: $image
      authors: $authors
      link: $link
    ) {
      user {
        _id
        username
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      user {
        _id
        username
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;
