import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardReview from "./CardReview";

const ProductReviews = ({ reviews }: { reviews: { id: number, name: string, image: string, comment: string, rating: number }[] }) => {

  const colors: string[] = ['#1D9BF0', '#3B5998', '#007BB6'];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h4'>Reviews</Typography>
      </Grid>
      {reviews.map((review, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <CardReview review={review} color={colors[index % colors.length]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductReviews;