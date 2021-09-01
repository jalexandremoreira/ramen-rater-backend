const { gql } = require('apollo-server');

const typeDefs = gql`
  type Bowl {
    author: String!
    category: Category
    id: ID!
    image: String!
    rating: Int!
    slug: String!
    title: String!
  }

  type Category {
    title: String!
    image: String!
    id: ID!
    slug: String!
    bowls: [Bowl!]!
  }

  type Query {
    bowls: [Bowl!]!
    bowl(slug: String!): Bowl
    categories: [Category!]!
    category(slug: String!): Category
  }
`;

module.exports = typeDefs;
