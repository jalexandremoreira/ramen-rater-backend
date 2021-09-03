const bowls = [
  {
    author: 'Alex',
    category: '1',
    description:
      'A simple bowl with a lot of greens to offset the deeply satisfying flavour and aroma of miso',
    id: '1',
    image:
      'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 0,
    slug: 'miso-ramen',
    title: 'Miso Ramen',
  },
  {
    author: 'Paul',
    category: '2',
    description:
      'This bowl is an incredible vegan recreation of the classic Tonkotsu, minus all the pork!',
    id: '2',
    image:
      'https://gastroplant.com/wp-content/uploads/2019/01/1811_Vegan-Tonkotsu-Ramen_550.jpg',
    rating: 0,
    slug: 'vegan-tonkotsu-ramen',
    title: 'Vegan Tonkotsu Ramem',
  },
  {
    author: 'Alex',
    category: '2',
    description: "For when tofu isn't enough, and you need a spicey hot treat",
    id: '3',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    rating: 0,
    slug: 'spicey-shrimp-ramen',
    title: 'Spicey Shrimp Ramem',
  },
  {
    author: 'Alice',
    category: '3',
    description:
      'This brothy, earthy deligh is filled with the unending variety of textures and deep aromas that only mushrooms can provide',
    id: '4',
    image:
      'https://www.eitanbernath.com/wp-content/uploads/2019/03/Eitan-Bernath-Wild-Mushroom-Miso-Ramen.jpeg',
    rating: 0,
    slug: 'mushroom-ramen',
    title: 'Mushroom Ramem',
  },
  {
    author: 'Paul',
    category: '1',
    description:
      'A creamy, deep and delightful broth, topped with tasy mushrooms and crispy tofu',
    id: '5',
    image:
      'https://images.squarespace-cdn.com/content/v1/5f88bf100b0890254b5edb28/1614179601509-R1NL9CTX0L4AG9H2Y5VM/creamy-miso-ramen-1.jpg?format=1000w',
    rating: 0,
    slug: 'creamy-tofu-ramen',
    title: 'Creamy Tofu Ramem',
  },
];

const categories = [
  {
    id: '1',
    image: 'creamy-category',
    slug: 'creamy',
    title: 'Creamy',
  },
  {
    id: '2',
    image: 'spicy-category',
    slug: 'spicy',
    title: 'Spicy',
  },
  {
    id: 3,
    image: 'mushrooms-category',
    slug: 'mushrooms',
    title: 'Mushrooms',
  },
];

module.exports = {
  bowls,
  categories,
};
