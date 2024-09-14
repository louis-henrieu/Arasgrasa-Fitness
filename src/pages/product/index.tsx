import { Grid } from "@mui/material"
import Product from "src/views/apps/products/list/Product"


const ProductsList = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Product />
        </Grid>

      </Grid>
    </div>
  )
}

export default ProductsList