const Category = {
  bowls: ({ id }, args, { bowls }) => {
    return bowls.filter(({ category }) => {
      return category === id;
    });
  },
};

module.exports = Category;
