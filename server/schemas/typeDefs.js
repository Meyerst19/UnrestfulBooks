const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User 
    deleteBook(bookId: ID!): User
}
`;

module.exports = typeDefs;
