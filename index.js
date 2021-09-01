const { ApolloServer, gql } = require('apollo-server');
const { bowls, categories } = require('./db');

const typeDefs = gql`
  type Bowl {
    title: String!
    author: String!
    image: String!
    rating: Int!
  }

  type Category {
    title: String!
    image: String!
    id: Int!
  }

  type Query {
    bowls: [Bowl]
    categories: [Category]
  }
`;

const resolvers = {
  Query: {
    bowls: () => bowls,
    categories: () => categories,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
