// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Article2 = () => {
  return (
    <Card>
      <a href='/blog/essential-vitamin-b6' style={{ textDecoration: 'none' }} rel='canonical'>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article2/image.png' />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            The essential about vitamin B6 
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Vitamine B6 is a water-soluble vitamin that is essential for good health.
            It is involved in more than 100 enzyme reactions in the body's cells, helping to metabolize amino acids from proteins and
            convert stored carbohydrates and fats into energy.
            It is also important for brain development during pregnancy and infancy as well as for immune function.
            In this article, we will discuss the benefits of vitamine B6 and how it can help you achieve your health and wellness
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default Article2
