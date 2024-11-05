import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const ProductHeader = ({ title, price, rating}: { title: string, price: number, rating: number }) => {
  return (
    <div>
      <Grid container spacing={2} alignItems='center' mb={3}>
        <Grid item>
          <Typography variant='h1'>{title}</Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1, textAlign: 'right' }}>
          <Typography variant='h3' color='primary'>
          {price} 🔔
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems='center' sx={{ ml: 1 }}>
        <Rating precision={0.5} readOnly value={rating}/>
        <Typography variant='body2' color='textSecondary' sx={{ ml: 2 }}>
          ·
        </Typography>
        <Typography variant='body2' color='textSecondary' sx={{ ml: 2 }}>
          {rating} / 5
        </Typography>
      </Grid>
    </div>
  );
};

export default ProductHeader;