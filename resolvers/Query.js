const Query = {
  bowls: (parent, args, { bowls }) => bowls,
  bowl: (parent, args, { bowls }) => {
    return bowls.find((bowl) => {
      return bowl.slug === args.slug;
    });
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    return categories.find((category) => {
      return category.slug === args.slug;
    });
  },
};

module.exports = Query;
