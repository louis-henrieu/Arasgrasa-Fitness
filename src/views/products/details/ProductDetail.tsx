import ProductTypes from "src/types/ProductTypes";
import ProductHeader from "./componentes/ProductHeader";
import ProductImage from "./componentes/ProductImage";
import ProductChoice from "./componentes/ProductChoice";
import ProductInformation from "./componentes/ProductInformation";
import ProductReviews from "./componentes/ProductReviews";
import ProductOtherPurchase from "./componentes/ProductOtherPurchase";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

const ProductDetail = ({ product }: { product: ProductTypes }) => {

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      {isMatch ? (
        <>
          <ProductHeader title={product.title} price={product.price} rating={product.rating} />
          <br/>
          <ProductImage image={product.image} title={product.title} />
          <ProductChoice choice={product.choice} />
          <ProductInformation description={product.description.long} composition={product.composition} />
          <ProductReviews reviews={product.reviews} />
          <ProductOtherPurchase products={product.others} />
        </>
      ) : (
        <>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <ProductImage image={product.image} title={product.title} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductHeader title={product.title} price={product.price} rating={product.rating} />
              <ProductChoice choice={product.choice} />
          <ProductInformation description={product.description.long} composition={product.composition} />
            </Grid>
          </Grid>
          <ProductReviews reviews={product.reviews} />
          <ProductOtherPurchase products={product.others} />
        </>
      )}
    </div>
  )
}

export default ProductDetail;