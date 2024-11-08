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
        <meta name="description" content="Discover top energy drinks, protein powders, and vitamins for elves. Natural ingredients to boost energy and performance." />
        <link rel="canonical" href="https://arasgrasa.fr/product/" />
        <meta property="og:description" content="Discover top energy drinks, protein powders, and vitamins for elves. Natural ingredients to boost energy and performance." />
        <meta property="og:url" content="https://arasgrasa.fr/product/" />w
        <meta property="twitter:description" content="Discover top energy drinks, protein powders, and vitamins for elves. Natural ingredients to boost energy and performance." />
        <meta property="twitter:url" content="https://arasgrasa.fr/product/" />
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
