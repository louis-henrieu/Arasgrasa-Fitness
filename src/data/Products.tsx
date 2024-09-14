import ProductTypes from 'src/types/ProductTypes'

const Products: ProductTypes[] = [
  {
    id: 0,
    title: 'Boost Cherry Energy Drink',
    description: {
      short:
        'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Cherry Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image1.jpeg',
    link: 'boost-cherry',
    price: 9.95,
    stock: 10,
    rating: 4.5,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/7.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/8.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/12.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Apple Energy Drink',
        description: 'Boost Apple Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'boost-apple',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      },
      {
        id: 1,
        title: 'Boost Blueberry Energy Drink',
        description: 'Boost Blueberry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'boost-blueberry',
        image: '/images/product/image3.jpeg',
        price: 7.95,
        rating: 5
      }
    ]
  },
  {
    id: 1,
    title: 'Boost Energy Original Drink',
    description: {
      short:
        'Boost Energy Orignal Drink will help to have your daily apport of vitamins and give you extra energy for your daily life.',
      long: 'Bost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image2.jpeg',
    link: 'arasgrasa-original',
    price: 8.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/3.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/5.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/13.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Blueberry Powder',
        description: 'Arasgrasa-Blueberry Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-vegan',
        image: '/images/product/image3.jpeg',
        price: 7.95,
        rating: 5
      }
    ]
  },
  {
    id: 2,
    title: 'Arasgrasa-Blueberry Powder',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image3.jpeg',
    link: 'arasgrasa-vegan',
    price: 7.95,
    stock: 10,
    rating: 5,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/3.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/5.png',
        comment: 'I love it. Using everyday.',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/11.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 3,
    title: 'Essential oil energy for elf',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image4.jpeg',
    link: 'essential-oil-energy',
    price: 5.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/3.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/8.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/13.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 4,
    title: 'Student Energy GEL',
    description: {
      short:
        'THE Energy Gel. Designed for the determined athlete and backed by experts to maximise your body’s potential. ',
      long: 'THE Energy Gel. Designed for the determined athlete and backed by experts to maximise your body’s potential. Containing 30g of carbohydrates per serving, with a 2:1 ratio of maltodextrin and fructose, our formula provides the energy you need to power through your workout. Designed to provide a balanced and efficient source of energy to your muscles when you need it most. Enriched with electrolytes and B vitamins to reduce fatigue.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image5.jpeg',
    link: 'energy-gel',
    price: 12.95,
    stock: 10,
    rating: 4.5,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/1.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/5.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/11.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 5,
    title: 'Fitness Powder',
    description: {
      short: 'Fitness Powder is made just for you if you need a quick energy boost.',
      long: 'Fitness Powder is made just for you if you need a quick energy boost. It is a great product for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image6.jpeg',
    link: 'fitness-powder',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/10.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/7.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/13.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 6,
    title: 'Energy Drink',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image7.jpeg',
    link: '',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/5.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/9.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/15.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 7,
    title: 'Sour Apple POP',
    description: {
      short:
        'Vegan Protein Sparkling Water. This beverage that’s a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein, our plant-based sparkling water is made from fruit juice and contains no artificial flavours or colours, and is packed with a vitamin B complex including pantothenic acid (vitamin B5) to support your mental performance1 and thiamine (vitamin B1)',
      long: 'Vegan Protein Sparkling Water is a revolutionary beverage that’s a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein, our plant-based sparkling water is made from fruit juice and contains no artificial flavours or colours, and is packed with a vitamin B complex including pantothenic acid (vitamin B5) to support your mental performance1 and thiamine (vitamin B1) to support your heart. Plus, our Vegan Protein Sparkling Water comes in a convenient 330ml can that’s 100% recyclable.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image8.jpeg',
    link: 'protein-shake',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/13.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/1.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/3.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 8,
    title: 'Energy Drink',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image9.jpeg',
    link: 'protein-smoothie',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/1.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/2.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/3.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
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
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image10.jpeg',
    link: 'energy-drink',
    price: 9.95,
    stock: 10,
    rating: 4,
    category: 'Drinks',
    choice: [
      {
        id: 0,
        name: 'Flavor',
        value: ['Cherry', 'Apple', 'Blueberry', 'Pineapple']
      },
      {
        id: 1,
        name: 'Size',
        value: ['500ml', '1L', '2L']
      }
    ],
    reviews: [
      {
        id: 0,
        name: 'John Doe',
        image: '/images/avatars/4.png',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        image: '/images/avatars/5.png',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        image: '/images/avatars/6.png',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Apple Powder',
        description: 'Arasgrasa-Apple Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-apple',
        image: '/images/product/image1.jpeg',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Original Powder',
        description: 'Arasgrasa-Original Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original',
        image: '/images/product/image2.jpeg',
        price: 8.95,
        rating: 4
      }
    ]
  }
]

export default Products
