const { Users } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await Users.find();
      } catch (err) {
        throw new Error(err);
      }
    },
  },


Mutation: {
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Incorrect username or password");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect username or password");
    }

    const token = signToken(user);
    return { token, user };
  },

  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },
}
};

module.exports = resolvers;
