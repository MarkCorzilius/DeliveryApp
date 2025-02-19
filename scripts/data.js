let basketTotalCount = 0;

let subtotalCost = 0;

let deliveryCost = 5;

let totalCost = 0;

let russianMenu = [
  {
    category: "Dishes",
    items: [
      {
        name: "Borsch",
        price: 8.99,
        description: "A traditional beet soup served hot or cold, often with sour cream.",
      },
      {
        name: "Pelmeni",
        price: 10.99,
        description: "Dumplings filled with minced meat, usually served with butter or sour cream.",
      },
      {
        name: "Beef Stroganoff",
        price: 12.99,
        description: "Tender beef strips in a creamy mushroom sauce, often served with pasta or rice.",
      },
      {
        name: "Olivie Salad",
        price: 7.49,
        description: "A classic Russian potato salad with eggs, pickles, peas, and mayonnaise.",
      },
      {
        name: "Blini",
        price: 6.99,
        description: "Thin pancakes served with sour cream, jam, or caviar.",
      },
      {
        name: "Shchi",
        price: 9.49,
        description: "A cabbage soup with meat, potatoes, and carrots, served hot.",
      },
      {
        name: "Pirozhki",
        price: 5.99,
        description: "Baked or fried pastries filled with meat, potatoes, or cabbage.",
      },
      {
        name: "Solyanka",
        price: 11.49,
        description: "A thick, sour soup made with pickles, olives, and assorted meats.",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Medovik",
        price: 7.99,
        description: "A multi-layered honey cake with creamy filling.",
      },
      {
        name: "Ptichye Moloko",
        price: 6.49,
        description: "A soft marshmallow-like soufflé covered in chocolate.",
      },
      {
        name: "Kartoshka",
        price: 4.99,
        description: "A chocolate biscuit cake shaped like a potato.",
      },
      {
        name: "Napoleon Cake",
        price: 8.99,
        description: "A layered puff pastry cake with vanilla custard.",
      },
      {
        name: "Vareniki with Cherries",
        price: 7.49,
        description: "Dumplings filled with sweet cherries, served with sour cream.",
      },
      {
        name: "Zefir",
        price: 5.99,
        description: "A fruit-flavored, airy confection similar to marshmallows.",
      },
      {
        name: "Syrniki",
        price: 6.99,
        description: "Fried cottage cheese pancakes, served with jam or honey.",
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        name: "Grechka",
        price: 4.99,
        description: "Boiled buckwheat groats, a common Russian side dish.",
      },
      {
        name: "Mashed Potatoes",
        price: 3.99,
        description: "Creamy mashed potatoes with butter.",
      },
      {
        name: "Pickled Cucumbers",
        price: 5.49,
        description: "Traditional Russian-style pickled cucumbers with garlic and dill.",
      },
      {
        name: "Kasha",
        price: 4.49,
        description: "A porridge made from grains like oats or millet.",
      },
      {
        name: "Black Bread",
        price: 2.99,
        description: "Dense, dark rye bread, often served with soups or spreads.",
      },
      {
        name: "Herring under a Fur Coat",
        price: 6.99,
        description: "A layered salad with herring, potatoes, beets, and mayonnaise.",
      },
      {
        name: "Mushroom Julienne",
        price: 7.49,
        description: "A creamy mushroom casserole with cheese, served hot.",
      },
    ],
  },
];

let basket = [
  {
    name: "Borsch",
    price: 8.99,
    amount: 0,
  },
  {
    name: "Pelmeni",
    price: 10.99,
    amount: 0,
  },
  {
    name: "Beef Stroganoff",
    price: 12.99,
    amount: 0,
  },
  {
    name: "Olivie Salad",
    price: 7.49,
    amount: 0,
  },
  {
    name: "Blini",
    price: 6.99,
    amount: 0,
  },
  {
    name: "Shchi",
    price: 9.49,
    amount: 0,
  },
  {
    name: "Pirozhki",
    price: 5.99,
    amount: 0,
  },
  {
    name: "Solyanka",
    price: 11.49,
    amount: 0,
  },
  {
    name: "Grechka",
    price: 4.99,
    amount: 0,
  },
  {
    name: "Mashed Potatoes",
    price: 3.99,
    amount: 0,
  },
  {
    name: "Pickled Cucumbers",
    price: 5.49,
    amount: 0,
  },
  {
    name: "Kasha",
    price: 4.49,
    amount: 0,
  },
  {
    name: "Black Bread",
    price: 2.99,
    amount: 0,
  },
  {
    name: "Herring under a Fur Coat",
    price: 6.99,
    amount: 0,
  },
  {
    name: "Mushroom Julienne",
    price: 7.49,
    amount: 0,
  },
  {
    name: "Medovik",
    price: 7.99,
    amount: 0,
  },
  {
    name: "Ptichye Moloko",
    price: 6.49,
    amount: 0,
  },
  {
    name: "Kartoshka",
    price: 4.99,
    amount: 0,
  },
  {
    name: "Napoleon Cake",
    price: 8.99,
    amount: 0,
  },
  {
    name: "Vareniki with Cherries",
    price: 7.49,
    amount: 0,
  },
  {
    name: "Zefir",
    price: 5.99,
    amount: 0,
  },
  {
    name: "Syrniki",
    price: 6.99,
    amount: 0,
  },
];
