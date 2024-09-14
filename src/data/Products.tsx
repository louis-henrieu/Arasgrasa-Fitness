import ProductTypes from 'src/types/ProductTypes'

const Products: ProductTypes[] = [
  {
    id: 1,
    title: 'Boost Cherry Energy Drink',
    description: {
      short:
        'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Cherry Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image1.jpeg',
    link: 'boost-cherry',
    price: 9.95,
    stock: 10,
    rating: 4.5,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 2,
    title: 'Boost Energy Original Drink',
    description: {
      short:
        'Boost Energy Orignal Drink will help to have your daily apport of vitamins and give you extra energy for your daily life.',
      long: 'Bost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image2.jpeg',
    link: 'arasgrasa-original',
    price: 8.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 3,
    title: 'Arasgrasa-Blueberry Powder',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image3.jpeg',
    link: 'arasgrasa-vegan',
    price: 7.95,
    stock: 10,
    rating: 5,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it. Using everyday.',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 4,
    title: 'Essentialm oil energy for elf',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image4.jpeg',
    link: 'essential-oil-energy',
    price: 5.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 5,
    title: 'Student Energy GEL',
    description: {
      short:
        'THE Energy Gel. Designed for the determined athlete and backed by experts to maximise your body’s potential. ',
      long: 'THE Energy Gel. Designed for the determined athlete and backed by experts to maximise your body’s potential. Containing 30g of carbohydrates per serving, with a 2:1 ratio of maltodextrin and fructose, our formula provides the energy you need to power through your workout. Designed to provide a balanced and efficient source of energy to your muscles when you need it most. Enriched with electrolytes and B vitamins to reduce fatigue.'
    },
    image: '/images/product/image5.jpeg',
    link: 'energy-gel',
    price: 12.95,
    stock: 10,
    rating: 4.5,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 6,
    title: 'Fitness Powder',
    description: {
      short: 'Fitness Powder is made just for you if you need a quick energy boost.',
      long: 'Fitness Powder is made just for you if you need a quick energy boost. It is a great product for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty.'
    },
    image: '/images/product/image6.jpeg',
    link: 'fitness-powder',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 7,
    title: 'Energy Drink',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image7.jpeg',
    link: '',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 8,
    title: 'Sour Apple POP',
    description: {
      short:
        'Vegan Protein Sparkling Water. This beverage that’s a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein, our plant-based sparkling water is made from fruit juice and contains no artificial flavours or colours, and is packed with a vitamin B complex including pantothenic acid (vitamin B5) to support your mental performance1 and thiamine (vitamin B1)',
      long: 'Vegan Protein Sparkling Water is a revolutionary beverage that’s a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein, our plant-based sparkling water is made from fruit juice and contains no artificial flavours or colours, and is packed with a vitamin B complex including pantothenic acid (vitamin B5) to support your mental performance1 and thiamine (vitamin B1) to support your heart. Plus, our Vegan Protein Sparkling Water comes in a convenient 330ml can that’s 100% recyclable.'
    },
    image: '/images/product/image8.jpeg',
    link: 'protein-shake',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 9,
    title: 'Energy Drink',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image9.jpeg',
    link: 'protein-smoothie',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  },
  {
    id: 10,
    title: 'Energy Drink',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    image: '/images/product/image10.jpeg',
    link: 'energy-drink',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 2,
        name: 'Jane Doe',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 3,
        name: 'Sam Smith',
        comment: 'Great product',
        rating: 4
      }
    ]
  }
]

export default Products
