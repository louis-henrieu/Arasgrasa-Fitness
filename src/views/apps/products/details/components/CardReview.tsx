// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Rating from "@mui/material/Rating"

const CardLinkedIn = ({ review, color }: { review: { id: number, name: string, image: string, comment: string, rating: number }, color : string }) => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: color }}>
      <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Rating precision={0.5} readOnly value={review.rating} />
        <Typography sx={{ mb: 3, color: 'common.white' }}>
          {review.comment}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt={review.name} src={review.image} sx={{ width: 34, height: 34, mr: 2.75 }} />
            <Typography sx={{ color: 'common.white' }}>{review.name}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardLinkedIn
