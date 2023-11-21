const { User, Donate, Category, Order } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")(
  "sk_test_51MmUhiJWBUm8M1eN7zGH87OtGnQPi1BiZMFgpcHzpEQa86sUDL0pGs6mV9fuddjdJrEImyvK5tJCqexf4DBJOo5000BOOUZLm7"
);

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    user: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Donation.find(params).populate("category");
    },
    donation: async (parent, { _id }) => {
      return await Donation.findById(_id).populate("category");
    },
    
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
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
  },
};

module.exports = resolvers;
