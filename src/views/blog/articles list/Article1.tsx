// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Article1 = () => {
  return (
    <Card>
      <a href='/blog/benefits-arasgrasa-plant' style={{ textDecoration: 'none' }} rel='canonical'>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article1/image.png' />
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            The benefits of Arasgrasa
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Arasgrasa is a new product that has been proven to help with weight loss, increase energy levels, and improve overall health.
            It is made from all-natural ingredients and is safe for people of all ages.
            In this article, we will discuss the benefits of Arasgrasa and how it can help you achieve your health and wellness goals.
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default Article1
