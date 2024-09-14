type ProductTypes = {
  id: number
  title: string
  description: {
    short: string
    long: string
  }
  image: string
  link: string
  price: number
  stock: number
  rating: number
  category: string
  reviews: {
    id: number
    name: string
    comment: string
    rating: number
  }[]
}

export default ProductTypes
