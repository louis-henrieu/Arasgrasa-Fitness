import { Grid } from '@mui/material'
import Products from 'src/data/Products'
import ProductTypes from 'src/types/ProductTypes'
import ProductInfo from 'src/views/product/product list/ProductInfo'

const ProductsList = () => {
  return (
    <div>
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
