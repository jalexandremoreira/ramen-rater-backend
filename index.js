const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { bowls, categories } = require('./db');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Bowl = require('./resolvers/Bowl');
const Mutation = require('./resolvers/Mutation');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Bowl,
    Category,
    Mutation,
    Query,
  },
  context: {
    bowls,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
