const { ApolloServer } = require('apollo-server');
const typeDefs = require('./shcema');
const { bowls, categories } = require('./db');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Bowl = require('./resolvers/Bowl');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Bowl,
    Category,
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
