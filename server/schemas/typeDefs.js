const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]
    bookCount: Int
}

type Auth {
    token: ID!
    user: User
}

type bookSchema {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {
    user(userId: ID!): User
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(description: String!, bookId: String!, title: String!, authors: [String], image: String, link: String): User
    deleteBook(bookId: String!): User
}
`;

module.exports = typeDefs;
