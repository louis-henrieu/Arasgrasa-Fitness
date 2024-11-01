type ProductTypes = {
  id: number
  title: string
  description: {
    short: string
    long: string
  }
  composition: string[]
  image: string
  link: string
  price: number
  stock: number
  rating: number
  category: string
  choice: {
    id: number
    name: string
    value: string[]
  }[]
  reviews: {
    id: number
    name: string
    date: string
    image: string
    comment: string
    rating: number
  }[],
  others: {
    id: number
    title: string
    description: string
    link: string
    image: string
    price: number
    rating: number
  }[]
}

export default ProductTypes
