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
};

module.exports = resolvers;
