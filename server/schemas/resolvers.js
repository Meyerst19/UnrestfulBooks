const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      const singleUser = await User.findById(userId);
      return singleUser;
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (
      parent,
      { userId, description, bookId, title, authors, image, link }
    ) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            savedBooks: {
              authors: authors,
              description: description,
              bookId: bookId,
              image: image,
              link: link,
              title: title,
            },
          },
        },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    deleteBook: async (parent, { userId, bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
