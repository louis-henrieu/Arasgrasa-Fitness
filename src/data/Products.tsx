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
    image: '/images/product/image1.webp',
    link: 'boost-cherry/',
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
        name: 'Ben Smith',
        date: '2024-06-12',
        image: '/images/avatars/7.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-08-20',
        image: '/images/avatars/8.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Lily Brown',
        date: '2024-10-01',
        image: '/images/avatars/12.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Energy Original Drink',
        description: 'Boost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original/',
        image: '/images/product/image2.webp',
        price: 8.95,
        rating: 4
      },
      {
        id: 1,
        title: 'Boost Blueberry Energy Drink',
        description: 'Boost Blueberry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-vegan/',
        image: '/images/product/image3.webp',
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
    image: '/images/product/image2.webp',
    link: 'arasgrasa-original/',
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
        name: 'Lena Smith',
        date: '2024-07-23',
        image: '/images/avatars/3.webp',
        comment: 'Very good flavor, I like to drink it after my workout',
        rating: 4
      },
      {
        id: 1,
        name: 'Corentin Lecourt',
        date: '2024-09-15',
        image: '/images/avatars/5.webp',
        comment: 'I love it, I drink it every day',
        rating: 5
      },
      {
        id: 2,
        name: 'Jonathan Davis',
        date: '2024-09-30',
        image: '/images/avatars/13.webp',
        comment: 'Great product. I recommend it',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Cherry Energy Drink',
        description: 'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'boost-cherry/',
        image: '/images/product/image1.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Arasgrasa-Blueberry Powder',
        description: 'Boost Blueberry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-vegan/',
        image: '/images/product/image3.webp',
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
    image: '/images/product/image3.webp',
    link: 'arasgrasa-vegan/',
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
        date: '2024-08-23',
        image: '/images/avatars/3.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-09-15',
        image: '/images/avatars/5.webp',
        comment: 'I love it. Using everyday.',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-27',
        image: '/images/avatars/11.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Cherry Energy Drink',
        description: 'Arasgrasa-Cherry Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'boost-cherry/',
        image: '/images/product/image1.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Boost Energy Original Drink',
        description: 'Boost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original/',
        image: '/images/product/image2.webp',
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
    image: '/images/product/image4.webp',
    link: 'essential-oil-energy/',
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
        date: '2024-08-23',
        image: '/images/avatars/3.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-09-01',
        image: '/images/avatars/8.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-23',
        image: '/images/avatars/13.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Energy Original Drink',
        description: 'Boost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original/',
        image: '/images/product/image2.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Student Energy GEL',
        description: 'Student Energy GEL will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'energy-gel/',
        image: '/images/product/image5.webp',
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
    image: '/images/product/image5.webp',
    link: 'energy-gel/',
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
        date: '2024-07-20',
        image: '/images/avatars/1.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-08-15',
        image: '/images/avatars/5.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-26',
        image: '/images/avatars/11.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Sour Apple POP',
        description: 'Sour Apple is a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein.',
        link: 'protein-shake/',
        image: '/images/product/image8.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Boost Energy Original Drink',
        description: 'Boost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original/',
        image: '/images/product/image2.webp',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 5,
    title: 'Fitness Powder',
    description: {
      short: 'Fitness Powder is made just for you if you need a quick energy boost and a great product for those who want to stay healthy and active.',
      long: 'Fitness Powder is made just for you if you need a quick energy boost. It is a great product for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image6.webp',
    link: 'fitness-powder/',
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
        date: '2024-08-03',
        image: '/images/avatars/10.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-09-30',
        image: '/images/avatars/7.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-31',
        image: '/images/avatars/13.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Essential oil energy for elf',
        description: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'essential-oil-energy/',
        image: '/images/product/image4.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Energy Vitamins',
        description: 'Energy Vitamins will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'energy-vitamins/',
        image: '/images/product/image10.webp',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 6,
    title: 'Protein Smoothie',
    description: {
      short: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image7.webp',
    link: 'protein-smoothie/',
    price: 8.99,
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
        date: '2024-09-15',
        image: '/images/avatars/5.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-10-08',
        image: '/images/avatars/9.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-11-01',
        image: '/images/avatars/15.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Student Energy GEL',
        description: 'Student Energy GEL will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'energy-gel/',
        image: '/images/product/image5.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Fitness Powder',
        description: 'Fitness Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'fitness-powder/',
        image: '/images/product/image6.webp',
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
        'Sour Apple is a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein.',
      long: 'Vegan Protein Sparkling Water is a revolutionary beverage that’s a refreshing alternative to traditional protein shakes. Featuring the same cutting-edge technology as our Clear Vegan Protein, our plant-based sparkling water is made from fruit juice and contains no artificial flavours or colours, and is packed with a vitamin B complex including pantothenic acid (vitamin B5) to support your mental performance1 and thiamine (vitamin B1) to support your heart. Plus, our Vegan Protein Sparkling Water comes in a convenient 330ml can that’s 100% recyclable.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image8.webp',
    link: 'protein-shake/',
    price: 9,
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
        date: '2024-06-12',
        image: '/images/avatars/13.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-08-03',
        image: '/images/avatars/1.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-25',
        image: '/images/avatars/3.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Energy Vitamins',
        description: 'Energy Vitamins will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'energy-vitamins/',
        image: '/images/product/image10.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Essential oil energy for elf',
        description: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'essential-oil-energy/',
        image: '/images/product/image4.webp',
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
    image: '/images/product/image9.webp',
    link: 'energy-drink/',
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
        date: '2024-06-12',
        image: '/images/avatars/1.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-08-20',
        image: '/images/avatars/2.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-10-01',
        image: '/images/avatars/3.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Boost Cherry Energy Drink',
        description: 'Boost Cherry Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'boost-cherry/',
        image: '/images/product/image1.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Boost Energy Original Drink',
        description: 'Boost Energy Original Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-original/',
        image: '/images/product/image2.webp',
        price: 8.95,
        rating: 4
      }
    ]
  },
  {
    id: 9,
    title: 'Energy Vitamins',
    description: {
      short: 'Energy Vitamins will help to become healthier and give you some extra energy for your daily workouts.',
      long: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts. It is a great drink for those who want to stay healthy and active. It is made from natural ingredients and has no artificial flavors or colors. It is also low in calories and sugar, so you can enjoy it without feeling guilty. Boost Energy Drink is a great way to get the energy you need to stay active and healthy.'
    },
    composition: ['Cherry', 'Apple', 'Blueberry', 'Pineapple'],
    image: '/images/product/image10.webp',
    link: 'energy-vitamins/',
    price: 7.45,
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
        date: '2024-06-04',
        image: '/images/avatars/4.webp',
        comment: 'Very good flavor',
        rating: 4
      },
      {
        id: 1,
        name: 'Jane Doe',
        date: '2024-07-30',
        image: '/images/avatars/5.webp',
        comment: 'I love it',
        rating: 5
      },
      {
        id: 2,
        name: 'Sam Smith',
        date: '2024-09-20',
        image: '/images/avatars/6.webp',
        comment: 'Great product',
        rating: 4
      }
    ],
    others: [
      {
        id: 0,
        title: 'Arasgrasa-Blueberry Powder',
        description: 'Arasgrasa-Blueberry Powder will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'arasgrasa-vegan/',
        image: '/images/product/image3.webp',
        price: 9.95,
        rating: 4.5
      },
      {
        id: 1,
        title: 'Energy Drink',
        description: 'Boost Energy Drink will help to become healthier and give you some extra energy for your daily workouts.',
        link: 'protein-smoothie/',
        image: '/images/product/image7.webp',
        price: 8.95,
        rating: 4
      }
    ]
  }
]

export default Products
