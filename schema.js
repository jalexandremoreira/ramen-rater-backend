const { gql } = require('apollo-server');

const typeDefs = gql`
  type Bowl {
    author: String!
    category: String
    description: String!
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

  type Mutation {
    addBowl(
      author: String!
      category: String
      description: String!
      image: String!
      rating: Int!
      slug: String!
      title: String!
    ): Bowl
  }
`;

module.exports = typeDefs;
