import { useRouter } from 'next/router'
import Product1 from 'src/views/product/product details/Product1'
import Product2 from 'src/views/product/product details/Product2'
import Product3 from 'src/views/product/product details/Product3'
import Product4 from 'src/views/product/product details/Product4'
import Product5 from 'src/views/product/product details/Product5'
import Product6 from 'src/views/product/product details/Product6'
import Product7 from 'src/views/product/product details/Product7'
import Product8 from 'src/views/product/product details/Product8'
import Product9 from 'src/views/product/product details/Product9'
import Product10 from 'src/views/product/product details/Product10'

const ProductDetails = ({ name }: { name: string }) => {
  switch (name) {
    case 'boost-cherry':
      return <Product1 />
    case 'arasgrasa-original':
      return <Product2 />
    case 'arasgrasa-vegan':
      return <Product3 />
    case 'essential-oil-energy':
      return <Product4 />
    case 'energy-gel':
      return <Product5 />
    case 'fitness-powder':
      return <Product6 />
    case 'protein-bar':
      return <Product7 />
    case 'protein-powder':
      return <Product8 />
    case 'protein-shake':
      return <Product9 />
    case 'protein-smoothie':
      return <Product10 />
    default:
      return null
  }
}

const Product = () => {
  const router = useRouter()
  const { name } = router.query

  return <ProductDetails name={name as string} />
}

export default Product
