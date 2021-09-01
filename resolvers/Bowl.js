const Bowl = {
  category: ({ category }, args, { categories }) => {
    return categories.find(({ id }) => {
      return id === category;
    });
  },
};

module.exports = Bowl;
