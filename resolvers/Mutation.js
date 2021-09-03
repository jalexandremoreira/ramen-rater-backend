const { v4 } = require('uuid');

const Mutation = {
  addBowl: (
    parent,
    { author, category, description, image, rating, slug, title },
    { bowls }
  ) => {
    const newBowl = {
      author,
      category,
      description,
      image,
      rating,
      slug,
      title,
      id: v4(),
    };
    bowls.push(newBowl);
  },
};

module.exports = Mutation;
