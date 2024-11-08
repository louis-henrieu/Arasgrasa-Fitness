import { Grid } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Products from 'src/data/Products'
import ProductTypes from 'src/types/ProductTypes'
import ProductInfo from 'src/views/product/product list/ProductInfo'

const ProductsList = () => {
  const router = useRouter()
  const currentProductId = router.query.id
  return (
    <div>
      <Head>
        <title>Product List - Arasgrasa Fitness</title>
        <meta
          name="description"
          content="Discover the best energy drinks, protein powders, and vitamins for elves. Our products are made from natural ingredients and are designed to enhance your energy and performance."
        />
        <link rel="canonical" href="https://www.arasgrasa.fr/product/" />
      </Head>
      <h1>Products List</h1>
      <Grid container spacing={6}>
        {Products.map((product: ProductTypes) => (
          <Grid item xs={12} md={8} lg={6} key={product.id}>
            <ProductInfo key={product.id} product={product} />
          </Grid>
        ))}{' '}
      </Grid>
    </div>
  )
}

export default ProductsList
