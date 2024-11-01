import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardReview from "./CardReview";
import { ProductReviewSchemaOrg } from "src/views/schema-org";

const ProductReviews = ({ product_name, reviews }: { product_name: string, reviews: { id: number, name: string, image: string, comment: string, rating: number, date: string }[] }) => {

  const colors: string[] = ['#1D9BF0', '#3B5998', '#007BB6'];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h4'>Reviews</Typography>
      </Grid>
      {reviews.map((review, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <ProductReviewSchemaOrg author={review.name} date={review.date} reviewBody={review.comment} rating={review.rating} image={review.image} productName={product_name} />
          <CardReview review={review} color={colors[index % colors.length]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductReviews;