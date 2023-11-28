const { User, Donation, Category} = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
require ("dotenv").config()
const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
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
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const donation = new Donation({ amount: args.amount, shelterID: args.shelterID });
      const line_items = [];


        const product = await stripe.products.create({
          name: "Shelter Donation",
          description: `Donation to Shelter ID ${args.shelterID}`,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: args.amount,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
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
